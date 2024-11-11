import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full py-2 px-6 bg-slate-400 flex items-center gap-x-5">
      <Link href="/login">
        <button className="bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-800 shadow-md">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-800 shadow-md">
          SignUp
        </button>
      </Link>
      <button className="bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-800 shadow-md"></button>
    </div>
  );
};
