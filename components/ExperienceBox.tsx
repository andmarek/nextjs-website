
interface ExperienceBoxProps {
    scheme: String,
    company: String,
    fromTo: String,
    jobTitle: String,
    description: String[],
    tags: String[]
}

export default function ExperienceBox(props: ExperienceBoxProps) {
    const tags = props.tags;
    const tagsDivs = tags.map((tag) => <div>{tag}</div>)

    const descriptionListItems = props.description.map((item) => <li> {item} </li>)

    return (
        <div
            className="group transition ease-in duration-300 hover:border-primary w-full border border-primary-dim p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">

                <h3
                    className={`text-${props.scheme}-maroon ease-in transition duration-300 group-hover:text-primary text-3xl`}>
                    {props.company}</h3>

                <div className="group flex flex-wrap gap-4">
                    <h3
                        className="text-ctp-mauve group-hover:text-tertiary-bright ease-in transition duration-300 text-2xl">
                        {props.jobTitle}</h3>
                    <h3
                        className="text-ctp-green text-2xl ease-in transition duration-300 group-hover:text-secondary">
                        {props.fromTo}</h3>
                </div>

                <div
                    className="text-ctp-yellow w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    {tagsDivs}
                </div>

                <ul
                    className="text-ctp-text duration-300 transition ease-in group-hover:text-gruvbox-gray list-disc tracking-wide leading-loose text-left">
                    {descriptionListItems} 
                </ul>

            </div>
        </div>
    )
}
