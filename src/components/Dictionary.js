import { useState, useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState();
    const [word2, setWord2] = useState();
    useEffect(() => {
        console.log("state is updated with " + word + " " + word2);
    }, [word, word2]);
    return (
        <>
            <input type="text" onChange={(e) => {
            setWord(e.target.value);
            }}/>
            <h2>Let's get the meaning of {word}</h2>
            <input type="text" onChange={(e) => {
            setWord2(e.target.value);
            }}/>
            <h2>Let's get the meaning of {word2}</h2>
        </>
    );
}