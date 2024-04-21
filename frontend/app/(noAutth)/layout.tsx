import Link from "next/link";
import Image from "next/image";

export default function NoAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <Link
            href="/"
            className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="mr-2 size-8"
              src="/logo.png"
              alt="logo"
              width={512}
              height={512}
            />
            MeTube
          </Link>
          {children}
        </div>
      </section>
    </>
  );
}
