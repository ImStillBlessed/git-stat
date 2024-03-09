'use client'
import { Octokit } from "octokit";

const octokit = new Octokit();
export const Searching = async (userName: string) => {
    if (userName === "") {
        return null;
    }
    try {
        console.log(userName);
        const response = await octokit.request("GET /users/{username}", {
            username: userName
          });
        const DATA = response.data;
        return DATA;
    } catch (error) {
        console.error(error);
        return null;
    }
}
