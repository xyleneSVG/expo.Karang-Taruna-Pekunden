import { cookies } from "next/headers";
import WebGateway from "../components/gateway";

export default async function Home() {
  const cookieStore = cookies();
  const expoToken = (await cookieStore).get("secureExpo")?.value || "";

  return <WebGateway expo={expoToken} />;
}
