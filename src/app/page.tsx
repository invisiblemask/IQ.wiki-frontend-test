import { Feed, HomeSide, Navbar, Stories } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Stories />
      <div className="flex flex-row justify-center mt-0 xl:mt-40 gap-7">
        <Feed />
        <HomeSide />
      </div>
    </main>
  );
}
