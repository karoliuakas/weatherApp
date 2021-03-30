import * as React from "react";
import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";

const PDFLink = () => {
  const { useState } = React;

  const initialData = undefined;
  const requestDataUrl = "http://localhost:5000/weather";

  const [error, setError] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [data, setData] = useState(initialData);
  const [attempts, setAttempts] = useState(0);


  const fetchData = () => {
    setRequesting(true);
    fetch(requestDataUrl)
      .then(res => res.json())
      .then((resData) => {
        setData(resData);
        setRequesting(false);
      })
      .catch(e => {
        setError(true);
        setRequesting(false);
        setAttempts(attempts + 1);
        console.error(e);
      });
  };

  return (
    <p>
      {!requesting && !data && !error && (
        <span className="clickable" onClick={() => fetchData()}>
          Generate weather PDF
        </span>
      )}
      {requesting && (
        <span>
          Getting document...
        </span>
      )}
      {data && !requesting && !error && (
        <PdfDocument document={<TestDocument data={data} />} />
      )}
      {!requesting && error && (
        <>
          <span>There has been an error. </span>
          {attempts < 3 ? (
            <span className="clickable" onClick={() => fetchData()}>
              Please try again.
            </span>
          ) : (
            <span>Please try again later.</span>
          )}
        </>
      )}
    </p>
  );
};

export default PDFLink;
