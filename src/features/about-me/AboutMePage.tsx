"use client";

import { motion } from "framer-motion";
import Footer from "shared/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export const AboutMePage = () => {
    return (
        <>
            <div className="min-h-dvh pb-10">
                <main className="flex flex-col items-center w-full px-5 sm:px-10 lg:px-20 pt-24 pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full max-w-4xl"
                    >
{/*                         <Link href="/">
                            <Image src="/icons/Back.svg" alt="Logo" width={30} height={30} />
                        </Link> */}
                        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-snow-white overflow-hidden shrink-0">
                                <Image
                                    src="/icons/logo.svg"
                                    alt="Profile"
                                    width={208}
                                    height={208}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
                                    About Me
                                </h1>
                                <p className="text-secondary text-lg mb-4">
                                    Full Stack Developer
                                </p>
                                <p className="text-foreground leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                </p>
                            </div>
                        </div>

                        <section className="mb-16">
                            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "Docker"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-snow-white text-foreground rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="mb-16">
                            <h2 className="text-2xl font-semibold mb-6">Background</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc.
                            </p>
                            <p className="text-foreground leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </section>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-me"
                                className="px-8 py-3 bg-foreground text-white font-semibold rounded-full hover:bg-secondary transition-colors text-center"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/"
                                className="px-8 py-3 border border-foreground text-foreground font-semibold rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-colors text-center"
                            >
                                View My Work
                            </Link>
                        </div>
                    </motion.div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default AboutMePage;
