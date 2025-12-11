"use client";

import { useSearchParams } from "next/navigation";
import { AndroidLauncher } from "./android-launcher";
import { useWindowWidth } from "../utils/windowWidth";
import { AccessDenied, OnlyMobile } from "./pages/denied-page";

export default function WebGateway({ expo }: { expo: string }) {
  const width = useWindowWidth();
  const searchParams = useSearchParams();
  const urlToken = searchParams.get("urlToken");

  const SECRET_EXPO = process.env.NEXT_PUBLIC_TOKEN_SECRET!;
  const SECRET_URL_KEY = process.env.NEXT_PUBLIC_TOKEN_URL!;

  console.log("expo prop:", JSON.stringify(expo));
  console.log("secret expo:", JSON.stringify(SECRET_EXPO));
  console.log("urlToken:", JSON.stringify(urlToken));
  console.log("secret URL:", JSON.stringify(SECRET_URL_KEY));

  const isExpoValid = expo === SECRET_EXPO && expo !== "";
  const isUrlTokenValid = urlToken === SECRET_URL_KEY && urlToken !== "";

  if (!isExpoValid && !isUrlTokenValid) {
    return <AccessDenied />;
  }

  if (width >= 450) {
    return <OnlyMobile />;
  }

  return <AndroidLauncher />;
}
