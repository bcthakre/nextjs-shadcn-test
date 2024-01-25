"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();


  console.log(data);
  return (
    <>
      <main>Hello World</main>
    </>
  );
}
