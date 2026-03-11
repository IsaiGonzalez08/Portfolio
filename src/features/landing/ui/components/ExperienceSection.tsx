"use client"
import { listCompanies } from "../data"
import { motion } from "framer-motion"

const ExperienceSection = () => {
    return (
        <section id="experience" className="mt-14 px-5 sm:px-10 lg:px-14">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="text-foreground font-bold text-4xl sm:text-5xl">Experience</h1>
            </motion.div>
            <div className="flex flex-col gap-14 mt-10">
                {listCompanies.map((company, index) =>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }} 
                        key={index}
                        className="flex flex-col gap-4 border-b border-secondary pb-8">
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
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default ExperienceSection