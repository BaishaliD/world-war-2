import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data as timelineData } from "./TimelineData";
import "./Timeline.css";
import ProgressBar from "./ProgressBar";

export default function Timeline() {
  const [data, setData] = useState(timelineData);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="timeline"
      className="bg-heroBg px-52 relative z-50 font-extralight"
    >
      <ProgressBar />
      {data.map((item, i) => {
        return (
          <div className="timeline">
            {i % 2 === 0 ? (
              <div
                className="bg-heroBg flex flex-col items-center mb-40 hover:cursor-pointer"
                onClick={() => {
                  navigate(`/story/${item.eventId}`);
                }}
              >
                <div className="h-48 flex container relative">
                  <div className="w-2/3 relative panel">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full bgImage"
                    />

                    <div className="h-full w-full absolute top-0 left-0 bgImage-overlay"></div>
                    <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-l from-heroBg to-transparent"></div>
                  </div>
                  <div className="w-1/3 bg-heroBg flex flex-col text-white justify-center pl-6 -ml-2">
                    <div className="text-3xl text-red-800">
                      <span className="border-y border-red-800">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-2xl mt-4 mb-2">{item.title}</div>
                    <div className="text-sm font-thin">{item.subtitle}</div>
                  </div>
                  <img
                    src={require("../assets/timeline/left-arrow.png")}
                    alt={item.title}
                    className="h-8 w-8 absolute left-5 bottom-5"
                  />
                </div>
              </div>
            ) : (
              <div
                className="bg-heroBg flex flex-col items-center mb-40 hover:cursor-pointer"
                onClick={() => {
                  navigate(`/story/${item.eventId}`);
                }}
              >
                <div className="bg-heroBg h-48 flex container relative">
                  <div className="w-1/3 bg-heroBg flex flex-col text-white justify-center items-end pr-6 -mr-2 z-50">
                    <div className="text-3xl text-red-800">
                      <span className="border-y border-red-800">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-2xl mt-4 mb-2 text-right">
                      {item.title}
                    </div>
                    <div className="text-sm text-right font-thin">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="w-2/3 relative panel">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full bgImage"
                    />
                    <div className="h-full w-full absolute top-0 left-0 bgImage-overlay"></div>
                    <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-heroBg to-transparent"></div>
                  </div>
                  <img
                    src={require("../assets/timeline/arrow-right.png")}
                    alt={item.title}
                    className="h-8 w-8 absolute right-5 bottom-5"
                    onClick={() => {
                      navigate(`/story/${item.eventId}`);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
