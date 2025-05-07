"use client";

import { useState } from "react";

import Header from "./components/ui/Header";
import Nav from "./components/ui/Nav";

import Hero from "./components/Hero";
import Genres from "./components/Genres";
import Moods from "./components/Moods";
import Colors from "./components/Colors";
import Emojis from "./components/Emojis";

export default function Home() {
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (delta: number) => {
    setPage((prev) => prev + delta);
  };

  return (
    <div
      className="flex flex-col items-center 
    relative overflow-hidden min-h-screen"
    >
      <svg
        className="absolute -z-50 h-72 w-72 opacity-20
        top-[100px] left-[200px] blur-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <g transform="translate(450.2122210563695 310.24860613615687)">
          <path
            d="M138.9 -158.4C169.4 -108.4 176.2 -54.2 177.2 0.9C178.1 56.1 173.2 112.2 142.7 158.4C112.2 204.5 56.1 240.8 -2.1 242.9C-60.3 245 -120.7 213 -145.7 166.8C-170.7 120.7 -160.3 60.3 -165.3 -4.9C-170.2 -70.2 -190.5 -140.5 -165.5 -190.5C-140.5 -240.5 -70.2 -270.2 -8 -262.2C54.2 -254.2 108.4 -208.4 138.9 -158.4"
            fill="#BB004B"
          />
        </g>
      </svg>

      <svg
        className="absolute -z-50 h-[52rem] w-[52rem] opacity-20
        top-[200px] left-[1200px] blur-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <g transform="translate(422.2080076796591 299.02833210905345)">
          <path
            d="M124 -241.8C124 -214.8 62 -107.4 79.2 -53.7C96.3 0 192.7 0 236.5 25.3C280.4 50.7 271.8 101.3 244.1 136.7C216.3 172.1 169.4 192.1 125.5 176.5C81.7 160.8 40.8 109.4 -10.8 128.2C-62.5 146.9 -125 235.8 -165.3 249.4C-205.5 263 -223.6 201.3 -203 147.1C-182.4 93 -123.2 46.5 -99.1 13.9C-75 -18.7 -86 -37.3 -102.2 -83.8C-118.3 -130.3 -139.7 -204.6 -123.5 -222.2C-107.3 -239.9 -53.7 -201 4.2 -208.2C62 -215.4 124 -268.8 124 -241.8"
            fill="#8f0f2a"
          />
        </g>
      </svg>

      {/* <svg
        className="absolute -z-50 h-[72rem] w-[72rem] opacity-20
        top-[800px] blur-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <g transform="translate(492.3055696800109 281.78336419432713)">
          <path
            d="M108 -202.5C128.6 -175.1 126.2 -123.3 117.4 -85.5C108.6 -47.7 93.3 -23.8 105.8 7.2C118.4 38.3 158.8 76.7 177 130.8C195.3 184.9 191.4 254.8 158.2 259.5C125 264.2 62.5 203.6 13.5 180.2C-35.5 156.8 -71 170.6 -96.3 161.4C-121.5 152.1 -136.5 119.8 -171.5 89.1C-206.4 58.3 -261.2 29.2 -270.9 -5.6C-280.5 -40.3 -245.1 -80.7 -192.4 -80.7C-139.7 -80.7 -69.9 -40.3 -34.9 -59.5C0 -78.7 0 -157.3 21.8 -195.2C43.7 -233 87.3 -229.9 108 -202.5"
            fill="#b1572a"
          />
        </g>
      </svg> */}

      {/* <svg
        className="absolute -z-50 h-[72rem] w-[72rem] opacity-20
        top-[1700px] -left-[200px] blur-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <g transform="translate(365.3703312098138 364.14794912988316)">
          <path
            d="M54.2 -110.1C94.8 -70.5 169.1 -105.5 195 -99.6C220.9 -93.7 198.5 -46.8 233.7 20.3C268.9 87.5 361.8 175 332.4 175C303.1 175 151.6 87.5 75.8 92.8C0 98 0 196 -1.5 198.6C-3 201.2 -6 108.4 -47.3 83.2C-88.6 58.1 -168.1 100.5 -168.8 97.9C-169.5 95.3 -91.2 47.7 -69.7 12.4C-48.2 -22.8 -83.4 -45.7 -109.3 -94.2C-135.1 -142.7 -151.5 -216.8 -131.8 -268.4C-112 -320 -56 -349 -24.6 -306.4C6.8 -263.8 13.7 -149.7 54.2 -110.1"
            fill="#dac73f"
          />
        </g>
      </svg> */}

      {/* <svg
        className="absolute -z-50 h-[64rem] w-[64rem] opacity-20
        top-[2500px] left-[600px] blur-[6rem]"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        version="1.1"
      >
        <g transform="translate(501.5499645265902 405.2773153602203)">
          <path
            d="M200 -374.2C224.9 -331.9 187.4 -209.2 160 -133.4C132.5 -57.7 115.3 -28.8 97.8 -10.1C80.3 8.7 62.7 17.3 71.9 61.5C81 105.7 117 185.3 109.5 181C102 176.7 51 88.3 7.6 75.2C-35.8 62.1 -71.7 124.1 -76.9 127.1C-82.1 130.1 -56.6 74.1 -106.9 43C-157.1 12 -283.1 6 -306.9 -13.7C-330.7 -33.5 -252.4 -67 -185.2 -68.7C-118 -70.5 -62 -40.4 -33 -80.3C-4 -120.3 -2 -230.1 42.7 -304.2C87.5 -378.2 175 -416.4 200 -374.2"
            fill="#9dcf51"
          />
        </g>
      </svg> */}

      <Header />

      {page === 0 ? (
        <Hero />
      ) : page === 1 ? (
        <Genres />
      ) : page === 2 ? (
        <Moods />
      ) : page === 3 ? (
        <Colors />
      ) : (
        <Emojis />
      )}

      <Nav currPage={page} onChangePage={handleChangePage} />
    </div>
  );
}
