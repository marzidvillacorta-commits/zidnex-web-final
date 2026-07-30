import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { getPrisma } from "@/lib/db";

export default async function Home() {
  const prisma = await getPrisma();
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio projects={projects} />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
