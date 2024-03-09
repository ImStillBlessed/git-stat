import { search } from "@/components/search";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userName = (searchParams.search) as string;
  let data;
  if (userName) {
    // if username is passed fetch the data from the api using searching function
    data = await search(userName);
  }

  return (
    <div>
      <Card>
        <CardHeader>
          {data.name}
        </CardHeader>
        <CardDescription>
          {data.bio} {data.location} {data.email} {data.twitter_username} {data.avatar_url}
        </CardDescription>
      </Card>
    </div>
  )
}
