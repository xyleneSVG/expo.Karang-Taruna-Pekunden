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
    <div className="flex justify-center items-center h-screen bg-[#212121]">
      <h1 className="w-max uppercase font-bold text-[5vw]">Access Denied wleee :p</h1>
    </div>
  );
}
