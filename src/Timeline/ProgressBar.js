import { useState } from "react";

export default function ProgressBar() {
  const [scrollPerc, setScrollPerc] = useState(0);
  window.addEventListener("scroll", (event) => {
    const timeline = document.getElementById("timeline");
    const height = timeline.getBoundingClientRect().height;

    const winScroll = document.documentElement.scrollTop;
    const scrollPerc = (winScroll * 100) / height;
    setScrollPerc(scrollPerc);
  });

  //TODO : remove event listener on unmount

  return (
    <div className="w-2 h-full min-h-screen bg-white absolute top-0 left-1/2 pb-10">
      <div
        className="w-full bg-red-800"
        style={{ height: `${scrollPerc}%` }}
      ></div>
    </div>
  );
}
