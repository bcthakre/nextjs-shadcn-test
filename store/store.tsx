import { create } from "zustand";
import { Subscription } from "../types/Subscription";

export type LanguagesSupported =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "hi"
  | "ja"
  | "la"
  | "ru"
  | "zh"
  | "ar";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  fr: "French",
  es: "Spanish",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
};

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
    isPro: () => boolean;
  }
  
  export const useSubscriptionStore = create<SubscriptionState>()((set, get) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
    isPro: () => {
      const subscription = get().subscription;
      if (!subscription) return false;
      return subscription.status === "active" && subscription.role === "pro";
    },
  }));