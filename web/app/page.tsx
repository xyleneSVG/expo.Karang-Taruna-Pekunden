/* eslint-disable @typescript-eslint/no-unused-vars */
import { cookies } from "next/headers";
import { AndroidLauncher } from "@/components/android-launcher";
import { aesDecrypt } from "@/utils/decrypt";

export default async function Home() {
  const cookieStore = cookies();
  const expoToken = (await cookieStore).get("expoToken")?.value || "";

  const MESSAGE = process.env.TOKEN_MESSAGE!;
  const SECRET = process.env.TOKEN_SECRET!;
  const IV = process.env.TOKEN_IV!;

  let decrypted = "";
  try {
    decrypted = aesDecrypt(expoToken, SECRET, IV);
  } catch (e) {}

  if (decrypted === MESSAGE) {
    return <AndroidLauncher />;
  }

  return (
    <div>
      <h1>No token detected / token {decrypted} invalid</h1>
    </div>
  );
}
