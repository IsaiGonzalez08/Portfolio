import { listIcons } from "./data";
import Header from "shared/components/ui/Header";
import ExperienceSection from "features/landing/ui/components/ExperienceSection";
import WorkSection from "features/landing/ui/components/WorkSection";
import Footer from "shared/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export const LandingPage = () => {
  return (
    <>
      <div className="h-dvh py-10">
        <Header />
        <main className="flex h-full flex-col justify-center items-center w-full px-5 sm:px-10 lg:px-14">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-center">
            <h1 className="text-3xl sm:text-5xl">Hello!, <span className="font-semibold">I'm Gerardo</span></h1>
            <div className="flex flex-row items-center gap-2 sm:mt-2">
              <div className="w-12 h-px bg-foreground sm:w-24"></div>
              <span className="text-base font-medium sm:text-2xl">Full Stack Developer</span>
            </div>
            <p className="mt-2 text-center font-light text-xl">Experience in design, installation, and maintenance of software.</p>
            <div className="flex flex-row gap-4 w-full sm:w-2/3 mt-4">
              <button className="cursor-pointer flex flex-row items-center font-semibold justify-center py-3 w-full border border-foreground bg-foreground text-white rounded-4xl hover:bg-secondary hover:border-secondary transition-colors">
                Get in touch
              </button>
              <button className="cursor-pointer flex flex-row items-center font-semibold justify-center py-3 w-full border border-foreground bg-white text-foreground rounded-4xl hover:bg-secondary hover:text-white hover:border-secondary transition-colors">
                Download CV
              </button>
            </div>
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
          </div>
        </main>
      </div>
      <ExperienceSection />
      <WorkSection />
      <Footer />
    </>
  )
}