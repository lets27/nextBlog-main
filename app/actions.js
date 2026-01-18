"use server";
import connectDb from "@/lib/db/connectMongoDb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Blog from "@/lib/models/blogModel";
import mongoose from "mongoose";
import { uploadImageFromUrl, uploadLocalFile } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

const { getUser } = getKindeServerSession();

//convert returned mongo data to normal js object to avoid errors
//it converts mongoDb _id types to normal strings
function serializeBlogs(blogs) {
  return blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString?.() || null,
    updatedAt: blog.updatedAt?.toISOString?.() || null,
  }));
}
// action.js


async function createBlog(formData) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  try {
    await connectDb();

    const imageUrl = formData.get("image");
    const imageFile = formData.get("file");
    const category = formData.get("category");

    // Guard: category must exist
    if (!category) {
      return { error: "Category is required" };
    }

    let uploaded = null;

    if (imageFile && imageFile.size > 0) {
      uploaded = await uploadLocalFile(imageFile);
    } else if (imageUrl && imageUrl.trim() !== "") {
      uploaded = await uploadImageFromUrl(imageUrl);
    }

    const data = Object.fromEntries(formData);

    // Clean unsafe fields
    delete data.file;
    delete data.image;

    // Attach author metadata
    data.authorId = user.id;
    data.authorName = user.given_name || user.name;
    data.authorImage = user.picture;

    // Attach image ONLY if it exists
    if (uploaded) {
      data.image = uploaded.secure_url;
      data.imageId = uploaded.public_id;
    }

    await Blog.create(data);

  } catch (err) {
    console.error("Create blog error:", err);
    return { error: "Unable to create blog at this time" };
  }

  revalidatePath("/");
  redirect("/dashboard");
}


// Fetch all blogs, no userId required
async function getBlogs() {
  try {
    await connectDb();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();

    console.log("blogs type", typeof blogs);
    return serializeBlogs(blogs);
  } catch (err) {
    console.error("Error fetching all blogs:", err);
    throw new Error("Failed to fetch blogs");
  }
}

// Fetch blogs for the current user, sorted by most recently added
async function fetchUserBlogs() {
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/register");
  }

  try {
    await connectDb();
    const userId = user.id;
    const blogs = await Blog.find({ authorId: userId })
      .sort({
        createdAt: -1,
      })
      .lean();

    return serializeBlogs(blogs);
  } catch (err) {
    console.error("Error fetching user blogs:", err);
    throw new Error("Failed to fetch user blogs");
  }
}

// ...existing code...

// Fetch a single blog post by its ID, with user authentication check
async function getSinglePost(postId) {
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/register");
  }

  try {
    await connectDb();
    // Check if postId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return null;
    }
    const blog = await Blog.findOne({ _id: postId }).lean();
    if (!blog) {
      throw new Error("Blog post not found");
    }
    // Convert to plain object
    return {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt?.toISOString?.() || null,
      updatedAt: blog.updatedAt?.toISOString?.() || null,
    };
  } catch (err) {
    console.error("Error fetching single blog post:", err);
    throw new Error("Failed to fetch blog post");
  }
}

// Update a blog by ID
async function updateBlog(id, data) {
  await connectDb();
  return Blog.findByIdAndUpdate(id, data, { new: true });
}

// Delete a blog by ID
async function deleteBlog(id) {
  await connectDb();
  return Blog.findByIdAndDelete(id);
}

export { createBlog, fetchUserBlogs, getBlogs, getSinglePost };
