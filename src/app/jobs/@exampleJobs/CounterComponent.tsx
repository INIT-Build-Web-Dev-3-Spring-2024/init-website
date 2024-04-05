"use client"
import { useState, useEffect } from "react"
import JobsCard, { Job} from "./JobsCard"


function CounterComopnent({jobInfo, counter}: {jobInfo: Job[], counter: number}){
    const [count, setCount] = useState(0)

    function upCounter(){
        setCount(count+1)
        console.log("Moved by 1: " + count)

    }
    function downCounter(){
        setCount(count-1)
        console.log("Moved by 1: " + count)

    }

    // useEffect(() =>{
    //     if(count > counter){
    //         setCount(0)
    //     }
    //     if(count < counter){
    //         setCount(counter)
    //     }
    // }, [count])

    return(
        <>
        <div className="flex">
            <div className="flex justify-center hover: cursor-pointer rouned-full border bg-blue-500 " onClick={downCounter}> - </div>
                <JobsCard {...jobInfo[count]}/>
            <div className="flex justify-center hover: cursor-pointer rouned-full border bg-blue-500 " onClick={upCounter}> + </div>            
        </div>
 
        </>
    )
}

export default CounterComopnent