"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
      if (snapshot.empty) {
        console.log("No matching documents.");
        // set no subscription
        return;
      } else {
        console.log("User has subscription");
        // set subscription
      }
    });
  }, [session]);
  return <div>SubscriptionProvider</div>;
}

export default SubscriptionProvider;
