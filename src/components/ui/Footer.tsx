import Image from "next/image";
import Link from "next/link";

export const Footer = () => {

    const footerSections = [
        {
            title: "Navigations",
            items: [
                {
                    name: "Projects",
                    url: ""
                },
                {
                    name: "About me",
                    url: ""
                },
                {
                    name: "Contact",
                    url: ""
                }
            ]
        },
        {
            title: "Contacts",
            items: [
                {
                    name: "Email",
                    url: ""
                },
                {
                    name: "LinkedIn",
                    url: ""
                }
            ]
        }
    ]

    return (
        <footer className="w-full flex flex-col border-t border-secondary rounded-4xl p-5">
            <div className="flex flex-col w-full gap-5">
                <div className="flex flex-row items-center gap-5">
                    <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-secondary text-sm">Developer with experience in the design, installation, and maintenance of software.</p>
                </div>
                <div className="flex flex-row gap-10 w-full">
                    {footerSections.map((section, index) =>
                        <div key={index} className="flex flex-col">
                            <h1 className="uppercase text-secondary font-semibold mb-4">{section.title}</h1>
                            <div className="flex flex-col">
                            {section.items.map((item, index) =>
                                <Link className="text-secondary text-sm" key={index} href={item.url}>{item.name}</Link>
                            )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr className="text-secondary w-full mt-5" />
            <p className="text-center text-secondary mt-2">© Isaí González, 2025.</p>
        </footer>
    )
}

export default Footer;