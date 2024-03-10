import { search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Avatar from "./avatar";
import Link from "next/link";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userName = searchParams.search as string;
  let data: any = {};
  if (userName) {
    // if username is passed fetch the data from the api using searching function
    data = await search(userName);
  }

  return (
    <div className="grid justify-center align-middle">
      <Card className="grid max-h-[80%] gap-2 w-[100%] md:flex justify-center align-middle ">
        <Avatar imageUrl={data.avatar_url} />
        <CardContent>
          <CardHeader>
            {data.name}
            <CardDescription className="gap-2">
              <p>{data.login}</p>
            </CardDescription>
          </CardHeader>
        </CardContent>
        <CardFooter>
          <CardContent>
            <CardHeader>
              <h1>Followers</h1>
              <CardDescription>
                <p>{data.followers}</p>
              </CardDescription>
            </CardHeader>
          </CardContent>
          <CardContent>
            <CardHeader>
              <h1>Following</h1>
              <CardDescription>
                <p>{data.following}</p>
              </CardDescription>
            </CardHeader>
          </CardContent>
        </CardFooter>
      </Card>
      <div className="grid md:flex justify-center gap-3">
        <Card>
          <Link href={"/repos"}>
          <CardContent>
            <CardHeader>
              <h1>Repositories</h1>
              <CardDescription>
                <p>{data.public_repos}</p>
              </CardDescription>
            </CardHeader>
          </CardContent>
          </Link>
        </Card>
        <Card>
          <CardContent>
            <CardHeader>
              <h1>Languages</h1>
            </CardHeader>
            {/* calculate the languages used in a slider  */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// {
//   login: 'ImStillBlessed',
//   id: 106008185,
//   node_id: 'U_kgDOBlGOeQ',
//   avatar_url: 'https://avatars.githubusercontent.com/u/106008185?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/ImStillBlessed',
//   html_url: 'https://github.com/ImStillBlessed',
//   followers_url: 'https://api.github.com/users/ImStillBlessed/followers',
//   following_url: 'https://api.github.com/users/ImStillBlessed/following{/other_user}',
//   gists_url: 'https://api.github.com/users/ImStillBlessed/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/ImStillBlessed/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/ImStillBlessed/subscriptions',
//   organizations_url: 'https://api.github.com/users/ImStillBlessed/orgs',
//   repos_url: 'https://api.github.com/users/ImStillBlessed/repos',
//   events_url: 'https://api.github.com/users/ImStillBlessed/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/ImStillBlessed/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'Blessed Oigbochie',
//   company: null,
//   blog: '',
//   location: null,
//   email: null,
//   hireable: null,
//   bio: 'Hello and welcome, I am a self taught software engineer and Web developer, Graduated from biochemistry, Avid music lover. This is my personal github account. ',
//   twitter_username: null,
//   public_repos: 27,
//   public_gists: 0,
//   followers: 1,
//   following: 2,
//   created_at: '2022-05-22T07:18:31Z',
//   updated_at: '2024-02-24T13:36:27Z'
// }
