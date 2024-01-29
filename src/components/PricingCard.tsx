const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "si_OnlcsLNQYbMVzV",
    href: "#",
    priceMonthly: "£5.99",
    description: "Unlock the Full Potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats (coming soon)",
      "1-hour, dedicated support response time",
      "Early access to New Features",
    ],
  },
];

function PricingCard({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="grid mx-auto max-wd-md grid-cols-1 gap-8 lg:max-wd-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
         // return some JSX here based on the tier
         <div key={tier.id}>{tier.name}</div>
       ))}
      </div>
    </div>
  );
}

export default PricingCard;
