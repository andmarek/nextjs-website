import Image from 'next/image'
interface IntroProps {
    colorScheme: string
}
export default function Intro(props: IntroProps) {
    return (
        <main>
            <div className="container flex justify-between items-center mx-auto md:px-14 lg:px-24 w-full">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="flex justify flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                        <h1 className={`text-${props.colorScheme}-green text-5xl md:text-6xl lg:text-7xl text-center md:text-left transform duration-500 transition-all`}
                            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>Andrew Marek
                        </h1>
                        <h1 className="text-center text-ctp-mauve text-5xl lg:text-7xl md:text-left"> Cloud Engineer</h1>
                    </div>
                    <Image
                        src="/selfie_lol_cropped.png"
                        alt="Vercel Logo"
                        width={500}
                        height={100}
                        priority
                    />
                </div>
            </div>
        </main>
    )
}