import React, { useState, useRef, useEffect } from 'react';

function UseStopWatch() {
    
    const [value, setValue] =useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setValue(prevValue => prevValue + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    const start = () => setIsActive(true);
    const  stop = () => setIsActive(false);
    const reset = () => {
        setIsActive(false);
        setValue(0);
    };

    return { value, start, stop, reset };
}

function StopWatch() {
    const { value, start, stop, reset } = UseStopWatch();

    return (
        <div className='timer'>
            <h1>{value}</h1>
            <div className="bor">
            <div className="buttons">
                <button className='button' style={{color:'red',backgroundColor:'black'}} onClick={start}>Start</button>
                <button  className='button' style={{color:'white',backgroundColor:'green'}}  onClick={stop}>Stop</button>
                <button className='button' style={{color:'orange',backgroundColor:'blue'}} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;
