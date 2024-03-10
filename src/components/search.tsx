import { Octokit } from "octokit";

const octokit = new Octokit();
const search = async (userName: string) => {
    if (userName === "") {
        return null;
    }
    try {
        console.log(userName);
        const response = await octokit.request("GET /users/{username}", {
            username: userName
          });
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return "data not found";
    }
}

export { search };