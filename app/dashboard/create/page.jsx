"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createBlog } from "@/app/actions";
import SubmitButton from "@/components/submitButton";
import { useState } from "react";

const CreateBlog = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="mt-8 font-semibold">
      <Card className="max-w-lg m-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* check out action.js file to fix this createblog function */}
          <form className="flex flex-col gap-4" action={createBlog}>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input type="text" required placeholder="title" name="title" />
            </div>
<div className="flex flex-col gap-2">
  <label>Category</label>
  <select
    name="category"
    required
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border rounded-md p-2 bg-transparent text-white"
  >
    <option value="" disabled>
      Select a category
    </option>
    <option value="football">Football</option>
    <option value="fighting">Fighting</option>
    <option value="racing">Racing</option>
    <option value="basketball">Basketball</option>
  </select>
</div>
            <div className="flex flex-col gap-2">
              <label>Content</label>
              <textarea required placeholder="blog content" name="content" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Image</label>
              <div className="flex gap-2">
                {/* For direct URL input */}
                <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  className="flex-1 border rounded-md p-2"
                />

                <div className="flex gap-2 items-center">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    id="fileInput"
                    className="hidden"
                  />

                  {/* Custom label styled like a button */}
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            {/* submit  buttons component */}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;
