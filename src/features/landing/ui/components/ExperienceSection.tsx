import { listCompanies } from "../data"

const ExperienceSection = () => {
    return (
        <section id="experience" className="mt-14 px-5 sm:px-10 lg:px-14">
            <h1 className="text-foreground font-bold text-4xl sm:text-5xl">Experience</h1>
            <div className="flex flex-col gap-14 mt-10">
                {listCompanies.map((company, index) =>
                    <div key={index} className="flex flex-col gap-4 border-b border-secondary pb-8">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-col gap-4">
                                <span className="text-foreground font-medium text-2xl">{company.role}, {company.name}</span>
                                <li className="list-inside text-secondary">{company.date}</li>
                            </div>
                            <div className="hidden sm:flex flex-col sm:flex-row gap-2">
                                {company.tags.map((item, index) =>
                                    <div key={index} className="border-2 text-center text-secondary border-secondary rounded-4xl px-4 py-2">
                                        {item.type}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-secondary">{company.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ExperienceSection