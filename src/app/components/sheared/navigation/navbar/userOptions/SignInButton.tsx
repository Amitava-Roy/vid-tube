"use client";
import { MdOutlineAccountCircle } from "react-icons/md";
const SignInButton = () => {
  return (
    <button className="px-3 py-1.5 flex gap-1 text-blue-400  border border-slate-700 rounded-full cursor-pointer">
      <MdOutlineAccountCircle className="h-6 w-6" />
      Sign In
    </button>
  );
};

export default SignInButton;
