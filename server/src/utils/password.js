import { compare } from "bcryptjs";

export async function checkPassword(plain, hash) {
  return compare(plain, hash);
}
