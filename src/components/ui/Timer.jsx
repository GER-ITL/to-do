import React from 'react'
import { useEffect, useState } from "react";
import {getPadTime} from '../../helpers/getPadTime'
const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(30)
    const [isCounting, setIsCounting] = useState(false)
  
    const minutes = getPadTime(Math.floor(timeLeft/60))
    const seconds = getPadTime(timeLeft - minutes*60)
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        isCounting &&
        setTimeLeft((timeLeft)=>(timeLeft>= 1 ? timeLeft - 1 : 0))
      },1000)
      if(timeLeft===0) setIsCounting(false)
      return()=>{
    clearInterval(interval)}
    },[timeLeft,isCounting])
  
    const handleStart=()=>{
      if(timeLeft===0)setTimeLeft(30)
      setIsCounting(true)
    }
    const handleStop=()=>{
      setIsCounting(false)
    }
    return (
      <div className="App">
        <h1>Timer</h1>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
  
      </div>
    );
}

export default Timer