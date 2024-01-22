"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <h1>Hi {session?.user?.name} !</h1>
      <h2>{session?.user?.email}</h2>
      {}
      <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Log in with Google{" "}
      </Button>
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign Out{" "}
      </Button>
    </>
  );
};

export default page;
