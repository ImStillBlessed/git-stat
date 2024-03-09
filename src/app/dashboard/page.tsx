import { search } from "@/components/search";

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
      <h1>Dashboard</h1>
      <h2>{data?.name}</h2>
      <h3>{data?.bio}</h3>
      <h4>{data?.location}</h4>
      <h5>{data?.email}</h5>
      <h6>{data?.twitter_username}</h6>
      <img src={data?.avatar_url} alt="avatar" />
    </div>
  )
}
