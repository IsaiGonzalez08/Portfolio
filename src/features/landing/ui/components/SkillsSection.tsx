import { motion } from "framer-motion";
import { skillCategories, certificates } from "../data";
import Image from "next/image";

const SkillsSection = () => {
    return (
        <section id="skills" className="my-14 px-5 sm:px-10 lg:px-14">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="text-foreground font-bold text-4xl sm:text-5xl">Skills</h1>
            </motion.div>
            <div className="flex flex-col gap-14 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                            <div className="flex flex-col gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="text-secondary text-base"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Certificates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-snow-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                                    <p className="text-secondary text-sm">{cert.issuer}</p>
                                    <p className="text-secondary text-sm mt-1">{cert.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default SkillsSection