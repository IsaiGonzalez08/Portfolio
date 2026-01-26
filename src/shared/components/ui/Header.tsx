"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-background/70 backdrop-blur-md py-5">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }} className="flex flex-row items-center justify-between w-full px-5 sm:px-10 lg:px-20">
                <Link href="/" className="cursor-pointer">
                    <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
                </Link>
                <div className="hidden sm:flex flex-row gap-14 font-medium">
                    <Link href="/" onClick={(e) => handleSmoothScroll(e, "work")}>Work</Link>
                    <Link href="/about" onClick={(e) => handleSmoothScroll(e, "experience")}>Experience</Link>
                    <Link href="/contact" onClick={(e) => handleSmoothScroll(e, "skills")}>Skills</Link>
                </div>
                <Link href="/about-me" className="bg-foreground font-medium hover:bg-secondary transition-colors cursor-pointer rounded-full text-white py-2 px-6">
                    About me
                </Link>
            </motion.div>
        </header>
    )
}

export default Header;