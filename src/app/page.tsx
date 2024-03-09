"use client";
import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="rounded-lg absolute border-2 border-b-4 border-r-4 border-black dark:text-s-zinc-100 w-1/2 md:max-w-[400px] dark:border-white px-3 -translate-x-1/2 
    block text-center left-1/2 md:flex justify-evenly py-8">
      <Input className='w-[100%]' type='string' placeholder='Github Username' onChange={handleInputChange} />
      <Button className="mt-2 md:m-0" onClick={() => {
        router.push(`/dashboard?${new URLSearchParams({ search: inputValue }).toString()}`)
      }}>Search</Button>
    </div>
  );
}
