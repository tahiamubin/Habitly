'use server'
import { headers } from "next/headers";
import { auth } from "../auth";

export const getToken = async (): Promise<string | null> => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log("token", token);
  return token || null;
};