const ExperienceSection = () => {

    const listCompanies = [
        {
            name: "Pixzelle Studio",
            role: "Front-end Developer",
            date: "August 2023 - Currently",
            description: "Development of interactive web pages using frameworks such as Vue, Svelte and Next.js and maintenance of cross-platform applications with Flutter.",
            tags: [
                {
                    type: "Web"
                },
                {
                    type: "Mobile"
                }
            ]
        },
        {
            name: "Vara Network",
            role: "Web Developer",
            date: "January/2023 - April/2023",
            description: "Leading front-end website development and involved in website design.",
            tags: [
                {
                    type: "Web"
                },
                {
                    type: "UX/UI"
                }
            ]
        },
        {
            name: "Dsoft",
            role: "Intership Web Developer",
            date: "April/2022 - August/2022",
            description: "Participation in web development implementation of new features in internal projects and troubleshooting in production systems.",
            tags: [
                {
                    type: "Web"
                },
                {
                    type: "UX/UI"
                }
            ]
        }
    ]

    return (
        <section id="experience" className="px-24">
            <h1 className="text-foreground font-bold text-6xl">Experience</h1>
            <div className="flex flex-col mt-16 gap-14">
                {listCompanies.map((company, index) =>
                    <div key={index} className="flex flex-row justify-between items-center w-full border-b-2 border-secondary pb-4 hover:scale-105 hover:duration-600 transition-all">
                        <div className="flex flex-col gap-4 w-2/5">
                            <h2 className="text-foreground text-2xl">{company.role}, {company.name}</h2>
                            <ul className="list-disc list-inside">
                                <li className="text-secondary">{company.date}</li>
                            </ul>
                        </div>
                        <p className="w-2/5 text-secondary">{company.description}</p>
                        <div className="flex flex-row justify-end gap-4 w-1/5">
                            {company.tags.map((item, index) =>
                                <div key={index} className="border-2 text-secondary border-secondary rounded-4xl px-4 py-2">
                                    {item.type}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ExperienceSection