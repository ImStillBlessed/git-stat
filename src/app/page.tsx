"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex justify-between align-middle">
      <Card className="max-w-3/4 md:max-w-[500px]">
        <CardHeader>
          <CardTitle>Welcome to Git stat</CardTitle>
          <CardDescription>Get git info</CardDescription>
        </CardHeader>
        <CardContent className="grid md:flex justify-center align-middle gap-2">
          <CardDescription>
            This website displays a card of github user account information
            using the username
          </CardDescription>
          we utilise the github api using Octokit to fetch the userdata
          <Button className="w-4 h-4" onClick={redirect("/dashboard")}>
            Get started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
