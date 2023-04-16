import ExperienceBox from "./ExperienceBox"
interface ExperienceProps {
    colorScheme: string
}

export default function Experience(props: ExperienceProps) {
    return (
        <main>
            <div className="container mt-20 flex justify-between items-center sm:text-sm mx-auto px-8 md:px-14 lg:px-24 w-full">
                <section className="w-full">
                    <div className="group">
                        <h1 id="experience" className="text-ctp-red transition duration-300 ease-in group-hover:text-primary secondary-text text-3xl text-primary-dim">experience</h1>
                        <p className="mt-6 mb-6 text-xl text-secondary-dim group-hover:text-secondary ease-in duration-300 transition w-full my-6">
                            During the day, I develop software at Change Healthcare, a healthcare technology company focused on
                            transforming the U.S. healthcare system through next-generation data tooling.
                        </p>
                        <p className="text-secondary-dim group-hover:text-secondary ease-in duration-300 transition mt-6 mb-6 text-xl w-full my">
                            I&apos;m on a data team working on
                            providing extremely performant and reliant APIs in the Cloud.
                        </p>
                    </div>
                    <div className="space-y-12 my-16">
                        <ExperienceBox 
                            scheme={props.colorScheme}
                            company="Change Healthcare" 
                            fromTo="Sept 2022 - Present" 
                            jobTitle="Software Engineer II" 
                            description={["Currently working on a team that deploys and scales high traffic APIs in AWS."]}
                            tags={["AWS", "Terraform", "Python", "Docker"]}
                        />
                        <ExperienceBox 
                            scheme={props.colorScheme}
                            company="Principal Financial Group" 
                            fromTo="Feb 2022 - Sept 2022" 
                            jobTitle="Software Engineer II" 
                            description={
                                [
                                    "Architected and developed a disaster recovery plan for a web application using AWS \
                                    CloudFront and Route53.",
                                    "Refactored and delivered backend infrastructural solutions using the AWS CDK in \
                                    TypeScript.",
                                    "Improved the performance of an API by 20% through implementing caching and multi-processing for internal API calls."
                                ]
                            }
                            tags={["TypeScript", "Python", "AWS CDK", "ReactJs"]}
                        />
                                                 

                        <div
                            className="group transition ease-in duration-300 hover:border-primary w-full border border-primary-dim p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                            <div
                                className="ease-in transition duration-300 flex flex-wrap justify-center text-center lg:text-left lg:block">
                                <h3
                                    className="text-primary-dim ease-in transition duration-300 group-hover:text-primary text-3xl">
                                    Principal Global Investors</h3>

                                <div className="flex flex-wrap gap-4">
                                    <h3
                                        className="text-tertiary-dim group-hover:text-tertiary-bright ease-in transition duration-300 text-2xl">
                                        Software Engineer I</h3>
                                    <h3
                                        className="text-secondary-dim duration-300 transition ease-in group-hover:text-secondary text-2xl">
                                        Feb 2021 - May 2021 </h3>
                                </div>


                                <div
                                    className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                    <div className="transition duration-500 ease-in hover:bg-badge-selected badge">Software
                                        Engineer</div>
                                    <div className="transition duration-500 ease-in hover:bg-badge-selected badge">Cloud
                                        Development</div>
                                    <div className="transition duration-500 ease-in hover:bg-badge-selected badge">AWS SageMaker
                                    </div>
                                    <div
                                        className="transition duration-500Teaching Assitant & Peer Mentor ease-in hover:bg-badge-selected badge">
                                        AWS Lambda</div>
                                    <div className="transition duration-500 ease-in hover:bg-badge-selected badge">Python</div>
                                </div>
                                <h4
                                    className="text-tertiary-dim transition duration-500 ease-in group-hover:text-tertiary-bright">
                                    Software Engineer</h4>
                                <h4 className="text-theme-dim ease-in transition duration-300 group-hover:text-theme"> May 2021
                                    - Feb 2022 </h4>

                                <ul
                                    className="text-left text-gruvbox-gray-dim ease-in transition duration-300 group-hover:text-gruvbox-gray list-disc tracking-wide leading-loose">
                                    <li> Migrated a Postgres database to AWS Aurora utilizing AWS CDK as part of an effort
                                        to
                                        move an application into the cloud.</li>
                                    <li> Contributed to a framework for automating ML model production in AWS SageMaker
                                        Studio.
                                    </li>
                                    <li> Helped maintain an AWS Datalake written in the CDK in order to support various
                                        internal data vendors. </li>
                                    <li> Architected an ETL process to enable portfolio managers to easily manage asset
                                        allocations. </li>
                                </ul>
                                




                                <div className="w-full justify-center lg:justify-start gap-3 mt-6 ">
                                    <h4
                                        className="text-tertiary-dim transition duration-500 ease-in group-hover:text-tertiary-bright">
                                        Software Engineer Intern </h4>
                                </div>
                                <h4 className="text-theme-dim ease-in transition duration-300 group-hover:text-theme"> May 2020
                                    - May 2021 </h4>
                                <ul
                                    className="text-left text-gruvbox-gray-dim ease-in transition duration-300 group-hover:text-gruvbox-gray list-disc tracking-wide leading-loose">
                                    <li> Created an AI chat bot that answered FAQS using Amazon Lex to facillitate employee
                                        onboarding. </li>
                                    <li> Worked with a full-time team in addtion to intern projects to contribute to an AWS
                                        Data Lake. </li>
                                    <li> Wrote unit tests for AWS CDK infrastructure as code to meet test coverage
                                        requirements for productionalization. </li>
                                </ul>
                            </div>

                        </div>
                        <ExperienceBox 
                            scheme={props.colorScheme}
                            company="Iowa State University" 
                            fromTo="Feb 2021 - May 2022" 
                            jobTitle="Teaching Assistant & Peer Mentor" 
                            description={[
                                "Instructed a project-based programming course to allow students to gain exposure to a collaborative work environment and learn version control methods",
                                "Served as teaching assistant for a lab-based course in C to facilitate experiential learning",
                                "Mentored over 20 software engineering students within an assigned learning community to garner academic success.",
                                "Lead and orchestrated learning community activities to promote academic services and promote a welcoming community."
                            ]}
                            tags={["Leadership", "Teaching", "Mentorship"]}                        
                        />
                    </div>

                </section>
            </div>

        </main>
    )
}