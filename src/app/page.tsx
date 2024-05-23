import Hero from "@/components/hero";
import GridSection from "@/components/sections/grid-section";
import RecentProjects from "@/components/sections/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <GridSection />
        <RecentProjects />
      </div>
    </main>
  );
}
