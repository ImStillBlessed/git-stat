import React from "react";
import { Button } from "./ui/button";

type Props = {
  text: string;
  onClick: () => void;
};

const SearchButton = ({ text, onClick }: Props) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SearchButton;
