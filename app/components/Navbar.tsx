"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const signOutHandler = () => {
    signOut({
      redirect: false,
    });
    router.push("/login");
  };
  return (
    <div className="flex w-full items-center justify-between gap-x-5 bg-slate-400 px-6 py-2">
      {session ? (
        <span className="font-semibold capitalize">
          Welcome, {session.user.user.user.username}!
        </span>
      ) : (
        <Link href="/login">
          <button className="rounded-lg bg-slate-600 px-4 py-2 text-white shadow-md hover:bg-slate-800">
            Login
          </button>
        </Link>
      )}
      {!session && (
        <button className="rounded-lg bg-slate-600 px-4 py-2 text-white shadow-md hover:bg-slate-800">
          <Link href="/signup">SignUp</Link>
        </button>
      )}

      {session && (
        <Link href="/">
          <button
            onClick={signOutHandler}
            className="rounded-lg bg-slate-600 px-4 py-2 text-white shadow-md hover:bg-slate-800"
          >
            Sign Out
          </button>
        </Link>
      )}
    </div>
  );
};
