import { redirect } from "next/navigation";
import { Octokit } from "octokit";

export let DATA = {}
const octokit = new Octokit();
export const Searching = async (userName: string) => {
    try {
        console.log(userName);
        const response = await octokit.request("GET /users/{username}", {
            username: userName
          });
        DATA = response.data;
        console.log(DATA)
        if (DATA) {
            return redirect("/dashboard")
        }
        // return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
