import Image from "next/image"

export default function Home() {
    return (
        <div className="app">
            <div className="home">
                <Image
                    src="/../public/images/logo-final-300.png"
                    height={200}
                    width={200}
                    style={{ paddingTop: "50px" }}
                />
                <section className="welcome">Welcome to tvRepo!</section>

                <section className="welcomedesc">
                    <p>
                        You want to find and watch the very best in television
                        entertainment. tvRepo is here to help!
                    </p>
                    <p>
                        We started tvRepo to solve what seemed to be a universal
                        issue:
                    </p>
                    <p>Remembering all the great shows you&apos;re watching!</p>
                </section>
            </div>
        </div>
    )
}
