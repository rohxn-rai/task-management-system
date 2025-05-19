import Link from "next/link";

const NotFoundHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto border-x  px-5 py-4 flex justify-between items-center">
        {/* lgoo */}

        <Link href="/dashboard">
          <h1 className="text-2xl font-semibold">TMS</h1>
        </Link>
      </div>
    </header>
  );
};

export default NotFoundHeader;
