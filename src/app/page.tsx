"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function Home() {
  const { data, status } = useSession();
  const router = useRouter();
  const logoutHandler = async () => {
    await signOut();
  };
  const loginHandler = async () => {
    router.push("/api/auth/signin");
  };

  console.log(data);
  return (
    <>
      <main>Hello World</main>
      <div>{JSON.stringify(data)}</div>
      {status === "unauthenticated" && (
        <Button onClick={loginHandler}>Log In</Button>
      )}

      {status === "authenticated" && (
        <Button onClick={logoutHandler}>Log out</Button>
      )}
    </>
  );
}
