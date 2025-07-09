import React from "react";

// function Greet(){
//     return <h1>Greet</h1>
// }

const Greet = (props) => {

    const {name, heroName} = props;

    return (
        <div>
            <h1>Hello {name}</h1>
            {heroName}
        </div>
    );
}

export default Greet;