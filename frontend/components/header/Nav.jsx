import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="gap-4">
        <Link href="/dashboard" className="text-sm">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
