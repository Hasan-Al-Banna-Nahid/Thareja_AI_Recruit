import MainHeader from "@/components/shared/header/MainHeader";
import HeaderWithNameAndProfile from "@/components/pages/gptVetting/HeaderWithNameAndProfile/HeaderWithNameAndProfile";

export default function GptVettingInterview({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <header className="shadow-md bg-white sticky top-0 z-50">
        <HeaderWithNameAndProfile />
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer Section */}
      <footer className="py-4">
        <p className="text-center my-2 text-sm sm:text-base">
          Powered by{" "}
          <span className="link link-primary no-underline font-semibold">
            Recruit
          </span>
        </p>
      </footer>
    </div>
  );
}
