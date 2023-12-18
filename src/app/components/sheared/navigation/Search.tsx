"use client";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
const Search = () => {
  const [text, setText] = useState("");
  return (
    <form className="flex flex-row w-2/5 border rounded-full overflow-hidden border-neutral-700">
      <input
        type="text"
        placeholder="serch"
        className="px-4 py-2 bg-neutral-900 w-full"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="px-3 bg-neutral-800 border-none">
        <MdOutlineSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default Search;
