import Logo from "@/components/Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import { MessagesSquareIcon } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";


async function Header() {
  const session = await getServerSession(authOptions);



  return (
    <header className="sticky z-50 top-0 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"} prefetch={false}>
              Pricing
            </Link>
          )}
          <DarkModeToggle />
          <UserButton session={session}/>
        </div>
      </nav>
      <UpgradeBanner />
    </header>
  );
}

export default Header;
