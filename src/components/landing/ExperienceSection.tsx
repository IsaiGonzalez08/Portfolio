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
        <section id="experience" className="mt-14 px-5">
            <h1 className="text-foreground font-bold text-4xl">Experience</h1>
            <div className="flex flex-col gap-14 mt-5">
                {listCompanies.map((company, index) =>
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <ul className="list-disc list-inside">
                                <li className="text-foreground text-2xl">{company.role}, {company.name}</li>
                            </ul>
                            <p className="text-secondary">{company.date}</p>
                        </div>
                        <p className="text-secondary">{company.description}</p>
                        <div className="flex flex-row gap-4">
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