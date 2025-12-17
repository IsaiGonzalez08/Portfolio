import Header from "@/components/ui/Header";
import ExperienceSection from "@/components/landing/ExperienceSection";
import WorkSection from "@/components/landing/WorkSection";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const listIcons = [
    { name: "LinkedIn", icon: "/icons/Linkedin.svg", href: "#" },
    { name: "GitHub", icon: "/icons/Github.svg", href: "#" },
    { name: "Dribbble", icon: "/icons/Dribbble.svg", href: "#" },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-screen pt-20">
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
          <h1 className="text-8xl">Hello!, <span className="font-bold">I'm Gerardo</span></h1>
          <div className="flex flex-row items-center gap-10 mt-6">
            <div className="w-52 h-0.5 bg-foreground"></div>
            <span className="text-4xl font-medium">Front-end Developer</span>
          </div>
          <p className="mt-10 text-2xl font-light text-center">Developer with 3 years of experience in the design, installation, and maintenance of software systems.</p>
          <div className="flex flex-row gap-4 mt-12">
            <button className="cursor-pointer flex flex-row items-center gap-2 mt-4 px-10 py-3 bg-foreground text-white rounded-4xl hover:bg-secondary transition-colors">
              Let's talk
              <Image src="/icons/right_arrow.svg" alt="Arrow" width={20} height={20} className="w-auto h-5" />
            </button>
            <button className="cursor-pointer flex flex-row items-center gap-4 mt-4 px-10 py-3 bg-white border-2 border-foreground text-foreground rounded-4xl hover:bg-gray-200 transition-colors">
              Download CV
              <Image src="/icons/download.svg" alt="Download" width={20} height={20} className="w-auto h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 mt-32 px-20 w-full max-w-5xl mx-auto">
          <div className="w-36 h-0.5 bg-foreground"></div>
          {listIcons.map((item, index) => (
            <Link href={item.href} key={index}>
              <Image
                src={item.icon}
                alt={item.name}
                width={30}
                height={30}
                className="w-auto h-8"
              />
            </Link>
          ))}
        </div>
      </main>
      <ExperienceSection />
      <WorkSection />
      <Footer />
    </>
  );
}
