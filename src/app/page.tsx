import LookBook from "@/components/containers/LookBook";
import { mockData } from "@/mockData";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen flex-1">
        <LookBook looks={mockData} />
      </main>
    </div>
  );
}
