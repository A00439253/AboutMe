import React, { Component } from "react"


class AboutMe extends Component {
    render() {
        return (
            <div>


                <img alt={`Country's Flag`} width={425} 
                src= "KD.jpg"                
                />

<br></br>
<br></br>
<br></br>
                <h1>
                    It's me, Kishor!
                    </h1>

<br></br>
<br></br>

                <p>
                    An artist introduced to engineering trying to amalgamet both the worlds to get the best of both.
                </p>

<br></br>

                <p>
                    Joined MCDA to understand and apply algorithms to interactive environments : Live Data.
                </p>

            </div>
        )
    }
}

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

export default AboutMe;