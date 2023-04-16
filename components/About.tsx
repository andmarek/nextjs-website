import { Inter } from 'next/font/google'

export default function AboutMe() {
    return (
        <main>
            <div className="group container flex justify-between mx-auto px-8 md:px-14 lg:px-24 w-full">
                <section className="w-full">
                    <h1 id="about-me" className="text-ctp-red md:group-hover:text-primary duration-300 ease-in transition pt-4 text-3xl text-primary-dim">about me</h1>
                    <div className="group-hover:text-secondary text-secondary-dim duration-300 ease-in transition">
                        <p className="text-xl w-full my-6"> I&apos;m a software engineer at Change Healthcare currently
                            living in the Des Moines area.
                            I&apos;m originally from Chicago, but moved to Iowa to attend Iowa State University where I finished my
                            bachelors degree in Software Engineering in 2021.
                        </p>
                        <p className="text-xl w-full my-6">
                            My current area of expertise is backend cloud development. Although I&apos;ve only been working with AWS
                            services since 2020,
                            I&apos;ve had the opportunity to contribute to a lot of really cool and interesting projects leveraging
                            AWS&apos;s cloud services.
                        </p>
                        <p className="text-xl w-full my-6"> Outside of programming, I like to be really active. I&apos;m
                            an avid runner, but also like to rollerblade,
                            lift weights, rock climb, and hike.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}
