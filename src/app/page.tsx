"use client";
import React, { useState } from "react";
import SearchButton from "@/components/button";
import { Searching } from "@/components/search";
import InputBar from "@/components/input";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="absolute -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 flex justify-evenly border-2 p-4 border-black">
      <InputBar onChange={handleInputChange} />
      <SearchButton text="Search" onClick={() => Searching(inputValue)} />
    </div>
  );
}
