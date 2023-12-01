import React from 'react'
import { useState, useEffect } from 'react'

export function Clock() {
    const [time, setTime] = React.useState(new Date());
    React.useEffect(() => {
      const timer = window.setInterval(() => {
        setTime(new Date()); // <-- Change this line!
      }, 1000);
      return () => {
        window.clearInterval(timer);
      };
    }, []);
  
    return (
      <div>Seconds: {time}</div>
    );
  }

