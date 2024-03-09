import { Searching } from "@/components/search";

export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userName = (searchParams.search) as string;
  let data;
  if (userName) {
    // if username is passed fetch the data from the api using searching function
    data = Searching(userName);
  }

  return <div>{userName ? <>{data}</> : "Unknown User"}</div>;
}
