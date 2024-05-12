import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

import Lottie from "react-lottie";
import animationData from "./lottie/riter-logo.json";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible ? (
        <div className="loading">
          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
        </div>
      ) : (
        <main className="hidden lg:flex w-full h-screen  flex-col items-center z-1">
          <Navigation />
          <Title />
          <Form />
        </main>
      )}
    </div>
  );
}

export default App;
