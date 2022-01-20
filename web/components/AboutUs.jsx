import React from "react"
import "../AboutUs.css"
import AboutUsCard from "./AboutUsCard"
import data from "../teamBios.json"

function AboutUs() {
    return (
        <div className="aboutus">
            <div id="aboutushead">
                <h2
                    style={{
                        padding: "30px",
                        fontSize: "48px",
                        fontWeight: "bold",
                    }}
                >
                    Our Team
                </h2>
                <hr></hr>
            </div>
            <div id="authorcards">
                {data.authors.map((author, index) => {
                    return (
                        <AboutUsCard
                            key={index}
                            img={author.img}
                            name={author.name}
                            bio={author.bio}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutUs
