import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

import Lottie from "react-lottie";
import animationData from "./lottie/riter-logo.json";
import video from "./assets/video.mp4";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
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
        <>
          <main className="hidden lg:flex w-full h-screen flex-col items-center z-1">
            <Navigation />
            <Title />
            <Form />
          </main>
          <section className="w-screen h-screen flex flex-col gap-3 lg:hidden items-center justify-center">
            <div>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                width={140}
              />
            </div>
            <h1 className="text-white font-plus-jakarta font-semibold">
              Mobile View
              <span className="font-light">Not Available!</span>
            </h1>
          </section>
          <video
            className="hidden lg:block absolute top-0 w-screen h-screen object-cover -z-[100]"
            width="750"
            height="500"
            autoPlay
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
}

export default App;
