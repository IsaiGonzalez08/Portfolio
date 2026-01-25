"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="flex flex-row items-center justify-between w-full px-5 pt-10 sm:px-20">
            <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
            <div className="hidden lg:flex flex-row gap-14 font-medium">
                <Link href="/" onClick={(e) => handleSmoothScroll(e, "work")}>Work</Link>
                <Link href="/about" onClick={(e) => handleSmoothScroll(e, "experience")}>Experience</Link>
                <Link href="/contact" onClick={(e) => handleSmoothScroll(e, "skills")}>Skills</Link>
            </div>
            <button className="hidden lg:block bg-foreground font-medium hover:bg-secondary transition-colors cursor-pointer rounded-full text-white py-2 px-6">
                About me
            </button>
        </header>
    )
}

export default Header;