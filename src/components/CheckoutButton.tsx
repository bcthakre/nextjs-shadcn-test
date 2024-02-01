"use client";

import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

function CheckoutButton() {
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    if (!session) return;
  };

  return (
    <div>
      <Button className="mt-8" onClick={() => createCheckoutSession()}>
        Sign Up
      </Button>
    </div>
  );
}

export default CheckoutButton;
