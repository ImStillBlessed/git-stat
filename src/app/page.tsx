"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Data from "@/components/Data";
import { SearchAndBtn } from "@/components/SearchAndBtn";
import { search } from "@/components/search";


export default function Home() {

  const [inputValue, setInputValue] = useState("");
  let isLoading = false;
  let data: any;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }; 

  const handleSearch = async () => {
    isLoading = true;
    data = await search(inputValue);
    console.log(data);
    isLoading = false;
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="max-w-3/4 md:max-w-[500px]">
        <CardHeader>
          <CardTitle>Welcome to Git stat</CardTitle>
          <CardDescription>
            Enter your Github username to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:flex justify-center align-middle gap-2">
          <SearchAndBtn onClick={handleSearch} onChange={handleInputChange} />
        </CardContent>
      </Card>
      {data ? (
        <Data data={data} loading={isLoading} />
      ) : (
        <div></div>
      )}
    </div>
  );
}