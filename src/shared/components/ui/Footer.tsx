import Image from "next/image";
import Link from "next/link";

export const Footer = () => {

    const email = "your@email.com";

    const footerSections = [
        {
            title: "Navigations",
            items: [
                {
                    name: "Projects",
                    url: "/projects"
                },
                {
                    name: "About me",
                    url: "/about-me"
                },
                {
                    name: "Contact",
                    url: "/contact-me"
                }
            ]
        },
        {
            title: "Contacts",
            items: [
                {
                    name: "Email",
                    url: `mailto:${email}?subject=Contact%20from%20Portfolio&body=Hi%2C%0A%0AI'm%20contacting%20you%20from%20your%20portfolio.%0A%0A`
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/gerardo-isa%C3%AD-gonz%C3%A1lez-ruiz-b02b6b224/"
                }
            ]
        }
    ]

    return (
        <footer className="w-full flex flex-col border-t border-secondary rounded-4xl p-5 sm:p-10">
            <div className="flex flex-col sm:flex-row w-full gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                    <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
                    <p className="text-secondary text-sm text-center sm:text-left">Developer with 3 years of experience in the design, installation, and maintenance of software systems.</p>
                </div>
                <div className="flex flex-row justify-around sm:justify-start gap-10 w-full">
                    {footerSections.map((section, index) =>
                        <div key={index} className="flex flex-col">
                            <h1 className="uppercase text-secondary font-semibold mb-2">{section.title}</h1>
                            <div className="flex flex-col gap-2">
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