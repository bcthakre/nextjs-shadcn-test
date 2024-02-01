"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // push a document to firebase db

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1OetglDblx6VCaujtkWDv0Ln",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
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
