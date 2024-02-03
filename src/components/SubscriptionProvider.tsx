"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSubscriptionStore } from "../../store/store";

function SubscriptionProvider(
    { children }: { children: React.ReactNode }
) {
  const { data: session } = useSession();

  const setSubscritpion = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session?.user.id) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          // set no subscription
          setSubscritpion(null);
        } else {
          console.log("User has subscription");
          // set subscription
          setSubscritpion(snapshot.docs[0].data());
        }
      },
      (error) => {
        console.log("Error getting documents: ", error);
      }
    );
  }, [session, setSubscritpion]);
  return <>{children}</>;
}

export default SubscriptionProvider;
