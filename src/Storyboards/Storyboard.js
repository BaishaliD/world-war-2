import { useEffect } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { pageLayout } from "./pageLayoutData";

export default function Storyboard() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{id && <Page layout={pageLayout[id]} />}</>;
}
