import { urls } from "../utils/urls";
import { generateClient } from "./client";

export const loginReq = async (body: ILoginForm) => {
  const client = generateClient();
  const response = await client.post(urls.auth.login, body);
  return response.data;
};

export const signupReq = async (body: ILoginForm) => {
  const client = generateClient();
  const response = await client.post(urls.auth.signup, body);
  console.log(response.data);

  return response.data;
};
