"use client";
import { useState } from "react";
import { Input } from "./ui/input";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleTextSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
