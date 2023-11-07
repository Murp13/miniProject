
import { useState } from "react";
import { FileUploader } from "./FileUploader";
export default function App() {
  const [fileName, setFileName] = useState("");
  console.log("fileName");
  console.log(fileName);
  const handleFile = (file) => {
    setFileName(file.name);
    console.log(setFileName());
  };
  return (
    <>
      <FileUploader handleFile={handleFile} />
      {fileName ? <p>Uploaded file: {fileName}</p> : null}
    </>
  );
}
