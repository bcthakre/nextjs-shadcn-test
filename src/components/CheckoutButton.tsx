"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "../../store/store";
import ManageAccountButton from "./ManageAccountButton";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const subscription = useSubscriptionStore((state) => state.subscription);

  const isLoadingSubscription = subscription === undefined;

  const isSubsribed = subscription?.status === "active";

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
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button className="mt-8">
        {isSubsribed ? (
          <ManageAccountButton />
        ) : isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
          <Button onClick={() => createCheckoutSession()}>Sign Up</Button>
        )}
      </Button>
    </div>
  );
}

export default CheckoutButton;
