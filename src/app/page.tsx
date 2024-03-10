"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
          <Input
            className="w-[100%]"
            type="string"
            placeholder="Github Username"
            onChange={handleInputChange}
          />
          <Button
            className="mt-2 md:m-0"
            onClick={() => {
              router.push(
                `/dashboard?${new URLSearchParams({
                  search: inputValue,
                }).toString()}`
              );
            }}
          >
            Search
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
