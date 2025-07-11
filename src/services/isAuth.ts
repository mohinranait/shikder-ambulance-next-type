import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { jwtSecret } from "./constants";


export function getAuthUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;  

  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded; 
  } catch (err: unknown) {
    throw new Error("Unauthorized: Invalid token");
  }
}
