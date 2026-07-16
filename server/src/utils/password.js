import { compare, hash } from "bcryptjs";

export async function checkPassword(plain, hash) {
  return compare(plain, hash);
}

export async function hashPassword(plain) {
  return hash(plain, 10);
}
