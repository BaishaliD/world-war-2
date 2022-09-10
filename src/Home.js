import { useEffect } from "react";
import Title from "./Hero/Title";
import Globe from "./Hero/Globe";
import Timeline from "./Timeline/Timeline";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <div className="bg-heroBg w-full h-80vh flex">
        <Title />
        <Globe />
      </div>
      <Timeline />
    </div>
  );
}
