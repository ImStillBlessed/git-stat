import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export const SearchAndBtn = ({ onChange, onClick }: Props) => {
    return (
        <>
        <Input
            className="w-[100%]"
            type="string"
            placeholder="Github Username"
            onChange={onChange}
          />
          <Button
            className="mt-2 md:m-0"
            onClick={onClick}
          >
            Search
          </Button>
        </>
    )
}