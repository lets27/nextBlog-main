"use client";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import DropDown from "./dropDown";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#050505] border-b border-white/10 px-6 py-3 flex justify-between items-center backdrop-blur-md bg-opacity-90">
      
      {/* 1. Left Side: Logo & Brand */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-12 w-16 md:h-14 md:w-20 relative overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="https://1000logos.net/wp-content/uploads/2023/05/EA-Sports-Logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white">
              WORLD <span className="text-red-600">SPORTS</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">Network</span>
          </div>
        </Link>
      </div>

      {/* 2. Center: Nav links (Modern Sports Underline) */}
      <ul className="hidden md:flex gap-10 items-center">
        {user && navLinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`relative text-xs font-black uppercase tracking-widest transition-colors py-2 ${
                isActive ? "text-white" : "text-zinc-500 hover:text-white"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600" 
                />
              )}
            </Link>
          );
        })}
      </ul>

      {/* 3. Right Side: User Controls */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            {/* Desktop User Info */}
            <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">Pro User</span>
                <span className="text-sm font-bold text-white">{user.given_name}</span>
              </div>
              {user.picture && (
                <img src={user.picture} alt="profile" className="w-8 h-8 rounded-full border border-red-600" />
              )}
            </div>
            
            <LogoutLink className="text-[10px] font-black uppercase tracking-tighter bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-sm transition">
              Sign Out
            </LogoutLink>
            
            <div className="md:hidden"><DropDown /></div>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <LoginLink className="text-xs font-black uppercase text-white hover:text-red-600 transition">Log In</LoginLink>
            <RegisterLink className="text-xs font-black uppercase bg-white text-black px-5 py-2 hover:bg-zinc-200 transition">
              Join Now
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;