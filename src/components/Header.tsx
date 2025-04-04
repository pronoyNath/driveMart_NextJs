import Image from "next/image";
import Link from "next/link";
import logo from "../assets/driveMartBlackLogo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";
import { Badge } from "./ui/badge";
import { checkUser } from "@/lib/checkUser";
type TUser =
  | {
      id: string;
      clerkUserId: string;
      email: string;
      name: string | null;
      imageUrl: string | null;
      phone: string | null;
      createdAt: Date;
      updatedAt: Date;
      role: "USER" | "ADMIN";
    }
  | null
  | undefined;

const Header = async ({ isAdminPage = false }) => {
  const user: TUser = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 border-b w-full">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="relative">
          <Image
            src={logo}
            alt="projectLogo"
            width={200}
            height={60}
            className="h-14 object-cover"
          />
          {isAdminPage && (
            <Badge
              variant={"destructive"}
              className="text-xs font-extralight absolute -top-1  -right-4"
            >
              admin
            </Badge>
          )}
        </Link>

        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href={"/"}>
              <Button variant={"outline"} className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span className="hidden md:inline">Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href={"/saved-cars"}>
                <Button>
                  <Heart size={18} />
                  <span className="hidden md:inline"> Saved Cars</span>
                </Button>
              </Link>
              {!isAdmin ? (
                <Link href={"/reservations"}>
                  <Button variant={"outline"}>
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href={"/admin"}>
                  <Button variant={"outline"}>
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl={"/"}>
              <Button variant={"outline"}>LogIn</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
