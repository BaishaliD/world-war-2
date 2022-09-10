import "./Layouts.css";
export function Title({ text }) {
  return (
    <div className="flex text-white text-6xl items-center h-48">
      <div className="w-10 bg-red-800 mr-10 divider"></div>
      <div className="tracking-wider">{text}</div>
    </div>
  );
}

export function Subtitle({ text }) {
  return <div className="my-20 text-xl tracking-widest italic">{text}</div>;
}

export function ImageSqR({ image, imageDesc }) {
  return (
    <div className="flex items-end my-20 max-h-96">
      <img className="h-full max-h-96 w-2/3" src={image} alt="" />
      <div className="pl-10 w-1/3 italic text-sm">{imageDesc}</div>
    </div>
  );
}

export function ImageSqL({ image, imageDesc }) {
  return (
    <div className="flex items-end my-20 max-h-96">
      <div className="pr-10 w-1/3 italic text-sm text-right">{imageDesc}</div>
      <img className="h-full max-h-96 w-2/3" src={image} alt="" />
    </div>
  );
}

export function ImageRect({ image, imageDesc }) {
  return (
    <div className="flex flex-col justify-center items-end my-20 max-h-96 px-16">
      <img className="h-full max-h-96 w-full" src={image} alt="" />
      <div className="w-full italic text-sm text-right my-5">{imageDesc}</div>
    </div>
  );
}

export function Callout({ text }) {
  return (
    <div className="text-xl my-20 tracking-wider italic border-x border-white text-center p-10">
      {text}
    </div>
  );
}

export function TwoColL({ textBig, textSmall }) {
  return (
    <div className="flex items-center h-52 my-20">
      <div className="text-4xl w-1/3 text-right">{textBig}</div>
      <div className="w-1 bg-red-800 mx-10 h-full"></div>
      <div className="text-xl w-2/3">{textSmall}</div>
    </div>
  );
}

export function TwoColR({ textBig, textSmall }) {
  return (
    <div className="flex items-center h-52 my-20">
      <div className="text-xl w-2/3 text-right">{textSmall}</div>
      <div className="w-1 bg-red-800 mx-10 h-full"></div>
      <div className="text-4xl w-1/3 ">{textBig}</div>
    </div>
  );
}

export function Paragraph({ text }) {
  return <div className="text-lg my-10">{text}</div>;
}
