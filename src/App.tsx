"use client"

import React from 'react';
import Home from './pages/Home';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setHasLoaded(true);
    };

    const timer = setTimeout(() => {
      setTimePassed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 모든 소스가 로드되고 최소 2초가 지난 상황에 홈을 보여주기!
    if (hasLoaded && timePassed) {
      setIsLoading(false);
    }
    // else {
    //   const timer = setTimeout(() => {
    //     setIsLoading(false);
    //   }, 5000);
    //   return () => clearTimeout(timer);
    // }
  }, [hasLoaded, timePassed]);


  return (
    <div className="App">
      {
        isLoading
          ? <Loading />
          : <Home />
      }
    </div>
  );
}

export default App;
