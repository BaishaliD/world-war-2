import {
  Title,
  Subtitle,
  ImageSqR,
  ImageSqL,
  ImageRect,
  Callout,
  TwoColL,
  TwoColR,
  Paragraph,
} from "./Layouts";

export default function Page({ layout }) {
  return (
    <div className="py-20 max-w-1000 text-white m-auto font-thin">
      <a
        className="absolute top-10 right-10 text-white border-b border-white"
        href="/"
      >
        HOME
      </a>
      {layout &&
        layout.length > 0 &&
        layout.map((item) => {
          switch (item.type) {
            case "title":
              return <Title text={item.text} />;
            case "subtitle":
              console.log("returning title");
              return <Subtitle text={item.text} />;
            case "imageSqR":
              return (
                <ImageSqR image={item.imageUrl} imageDesc={item.imageDesc} />
              );
            case "imageSqL":
              return (
                <ImageSqL image={item.imageUrl} imageDesc={item.imageDesc} />
              );
            case "imageRect":
              return (
                <ImageRect image={item.imageUrl} imageDesc={item.imageDesc} />
              );
            case "callout":
              return <Callout text={item.text} />;
            case "paragraph":
              return <Paragraph text={item.text} />;
            case "twoColL":
              return (
                <TwoColL textBig={item.textBig} textSmall={item.textSmall} />
              );
            case "twoColR":
              return (
                <TwoColR textBig={item.textBig} textSmall={item.textSmall} />
              );
            default:
              return null;
          }
        })}
    </div>
  );
}
