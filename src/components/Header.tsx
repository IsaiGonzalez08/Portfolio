import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between w-full px-24 py-12">
            <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
            <div className="flex flex-row gap-14 text-xl font-medium">
                <Link href="/">Work</Link>
                <Link href="/about">Experience</Link>
                <Link href="/contact">Skills</Link>
            </div>
            <button className="bg-foreground text-white px-8 py-3 rounded-4xl">
                About me
            </button>
        </header>
    )
}

export default Header;