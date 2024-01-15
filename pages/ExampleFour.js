import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"
import { useEffect, useEffet, useState } from "react";



export default function ExampleFour() { 
    const [number, setNumber] = useState(0);
    const [color,setColor] = useState("grey")

    const[trigger,setTrigger] = useState(false);

    const HandleChange = () => {
        if (number > 2) {
            setColor("orange")
        }
    console.log(number)
  }

useEffect(() => {
    var interval;
    if (trigger) {
        interval = setInterval(() => {
            HandleChange()
            setTrigger(false);
        }, 3000) // After 3 seconds it will console log the stuff below
    }
    console.log(number);
    console.log(trigger);

    //clearing interval so doesnt get stuck in loop

    return() => clearInterval(interval);
  }, [trigger])


    return(
        <>
            <Header/>
            <amin>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true)
                }}>Add number</button>
                <h1 style={{ color: color }}>Color the text color</h1>

                {
                    number > 1 && <div style={{
                        backgroundColor: `${color}`,
                        lineHeight: 10,
                        padding: 20
                    }}>
                        Box
                    </div>
                }
            </amin>
            <Footer/>
        </>

    )
}