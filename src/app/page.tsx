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
      <main className="flex flex-col items-center w-full mt-14 px-5">
        <h1 className="text-3xl">Hello!, <span className="font-semibold">I'm Gerardo</span></h1>
        <div className="flex flex-row items-center gap-2">
          <div className="w-12 h-px bg-foreground"></div>
          <span className="text-base font-medium">Front-end Developer</span>
        </div>
        <p className="text-4xl font-medium mt-2 text-center leading-12">Experience in design, installation, and maintenance of software.</p>

        <button className="cursor-pointer mt-6 flex flex-row items-center font-semibold justify-center py-3 w-full bg-foreground text-white rounded-4xl hover:bg-secondary transition-colors">
          GET IN TOUCH
        </button>


        <div className="flex items-center w-full gap-4 mt-14">
          <div className="w-20 h-px bg-foreground"></div>
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
