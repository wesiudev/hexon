import Link from "next/link";

export const Msg = () => (
  <div className="font-sans w-full h-full">
    <span>
      Image saved in your{" "}
      <Link href="/backpack">
        <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
          Backpack
        </strong>{" "}
      </Link>
    </span>
  </div>
);
