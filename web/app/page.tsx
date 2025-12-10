import { cookies } from "next/headers";
import { AndroidLauncher } from "../components/android-launcher";

export default async function Home() {
  const cookieStore = cookies();

  const expoToken = (await cookieStore).get("secureExpo")?.value || "";

  const SECRET = process.env.TOKEN_SECRET!;

  if (expoToken === SECRET) {
    return <AndroidLauncher />;
  }

  return (
    <div>
      <h1>Access Denied wleee :p</h1>
    </div>
  );
}
