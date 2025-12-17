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
        <header className="flex flex-row items-center justify-between w-full px-24 py-12">
            <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
            <div className="flex flex-row gap-14 text-xl font-medium">
                <Link href="/about" onClick={(e) => handleSmoothScroll(e, "experience")}>Experience</Link>
                <Link href="/" onClick={(e) => handleSmoothScroll(e, "work")}>Work</Link>
                <Link href="/contact" onClick={(e) => handleSmoothScroll(e, "skills")}>Skills</Link>
            </div>
            <button className="bg-foreground text-white px-8 py-3 rounded-4xl">
                About me
            </button>
        </header>
    )
}

export default Header;