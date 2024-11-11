import { urls } from "../utils/urls";
import { generateClient } from "./client";

export const getTasks = async (token: string) => {
  const client = generateClient();
  const response = await client.get(urls.task.get, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
