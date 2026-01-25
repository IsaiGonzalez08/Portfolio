import { listCompanies } from "../data"

const ExperienceSection = () => {
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