import * as React from "react";
import { BlobProvider } from "@react-pdf/renderer";

const PdfDocument = ({document }) => {
  const { useState, useEffect } = React;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  if (!ready) {
    return null;
  } else {
    return (
      <BlobProvider document={document}>
        {({ url, loading, error }) => {
          if (loading) {
            return (
              <span>
                Generating document...
              </span>
            );
          }
          if (!loading && url) {
            return (
              <a href={url} target="_blank">
                Open weather list
              </a>
            );
          }
          if (error) {
            console.error(error);
            return <p>An error occurred</p>;
          }
          return null;
        }}
      </BlobProvider>
    );
  }
};

export default PdfDocument;
