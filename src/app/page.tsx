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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="max-w-3/4 md:max-w-[500px]">
        <CardHeader>
          <CardTitle>Welcome to Git stat</CardTitle>
          <CardDescription>Get git info</CardDescription>
        </CardHeader>
        <CardContent className="grid md:flex justify-center align-middle gap-2">
          This website displays a card of github user account information using
          the username we utilise the github api using Octokit to fetch the
          userdata
        </CardContent>
        <Button
          className="max-w-full self-center mb-2 mx-4"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Get started
        </Button>
      </Card>
    </div>
  );
}
