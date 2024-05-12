import React from "react";
import Lottie from "react-lottie";
import animationData from "./../../lottie/waving-hand-data.json";

const Title = () => {
  return (
    <section className="flex flex-col gap-3 justify-center items-center my-8">
      <div className="info-box">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-[1.7rem] h-[1.7rem] rounded-full bg-[#AA80FF]/10">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1441)">
                <path
                  d="M2.855 11.4013C2.47958 10.5938 2.28125 9.71544 2.28125 8.83002C2.28125 7.9021 2.48667 6.98835 2.89042 6.15252C3.29417 5.31669 3.875 4.58001 4.5975 3.99918C5.32 3.41835 6.16291 3.00751 7.06958 2.79501C7.97625 2.58251 8.91125 2.57544 9.825 2.76669C10.7317 2.96502 11.5887 3.36168 12.3183 3.92834C13.055 4.49501 13.65 5.22459 14.0679 6.05334C14.4858 6.88209 14.7054 7.79585 14.7267 8.71668C14.7408 9.6446 14.5496 10.5584 14.1671 11.4013"
                  stroke="white"
                  stroke-width="1.0625"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M11.4184 13.1862C11.0147 13.8803 11.2555 14.7728 11.9567 15.1766C12.658 15.5803 13.5505 15.3395 13.9542 14.6453L14.6838 13.3845C15.0876 12.6903 14.8467 11.7978 14.1455 11.3941C13.4442 10.9903 12.5517 11.2312 12.148 11.9253L11.4184 13.1862Z"
                  stroke="white"
                  stroke-width="1.0625"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M4.84877 11.9254C4.44502 11.2312 3.55252 10.9904 2.85127 11.3941C2.15002 11.7979 1.90919 12.6904 2.31294 13.3845L3.04252 14.6454C3.44627 15.3395 4.33876 15.5804 5.04001 15.1766C5.74126 14.7729 5.9821 13.8804 5.57835 13.1862L4.84877 11.9254Z"
                  stroke="white"
                  stroke-width="1.0625"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1441">
                  <rect
                    width="17"
                    height="17"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span>4 Support online</span>
        </div>
        <div className="flex  items-center pr-1">
          <div className="flex justify-center items-center w-[1.7rem] h-[1.7rem]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1446)">
                <path
                  d="M8.11027 9.75376L2.62069 6.67958C1.95485 6.29708 1.95485 5.66668 2.62069 5.28418L8.11027 2.21C8.23069 2.15333 8.36526 2.125 8.49984 2.125C8.63443 2.125 8.769 2.15333 8.88942 2.21L14.379 5.28418C15.0448 5.66668 15.0448 6.29708 14.379 6.67958L8.88942 9.75376C8.769 9.81043 8.63443 9.83876 8.49984 9.83876C8.36526 9.83876 8.23069 9.81043 8.11027 9.75376Z"
                  stroke="white"
                  stroke-width="1.0625"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.2457 9.69L14.379 10.3204C15.0448 10.7029 15.0448 11.3333 14.379 11.7158L8.88942 14.79C8.769 14.8467 8.63443 14.875 8.49984 14.875C8.36526 14.875 8.23069 14.8467 8.11027 14.79L2.62069 11.7158C1.95485 11.3333 1.95485 10.7029 2.62069 10.3204L3.74691 9.69"
                  stroke="white"
                  stroke-width="1.0625"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1446">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <a>Join us</a>
        </div>
      </div>
      <h1 className="flex items-center gap-3 text-white text-[48px] font-plus-jakarta">
        Lets Have a Chat
        <Lottie
        className="mt-2"
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={40}
          width={40}
        />
      </h1>
      <p className="text-center text-[#84808D] leading-[141.6%]">
        Questions about our products/services, orders, or just <br /> want to
        say hello? We're here to help
      </p>
    </section>
  );
};

export default Title;
