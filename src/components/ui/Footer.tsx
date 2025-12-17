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
        <footer className="w-full flex flex-col items-start px-24 py-12 border-t border-secondary rounded-4xl">
            <div className="flex flex-row w-full">
                <div className="flex flex-col gap-5 w-1/4">
                    <Image src="/icons/logo.svg" alt="logo" width={50} height={50} />
                    <p className="text-secondary">Developer with experience in the design, installation, and maintenance of software.</p>
                </div>
                <div className="flex flex-row justify-end w-3/4 gap-24">
                    {footerSections.map((section, index) =>
                        <div key={index} className="flex flex-col">
                            <h1 className="uppercase text-secondary font-semibold mb-4">{section.title}</h1>
                            <div className="flex flex-col gap-3">
                            {section.items.map((item, index) =>
                                <Link className="text-secondary text-sm" key={index} href={item.url}>{item.name}</Link>
                            )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr className="text-secondary w-full mt-10" />
            <p className="text-center text-secondary mt-5">© Isaí González, 2025.</p>
        </footer>
    )
}

export default Footer;