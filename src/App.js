import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Deal from "./components/Deal";
import "cropperjs/dist/cropper.css";
import "./styles/style.css";
import Profile from "./components/img/profile-image-placeholder.jpg";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const [cropData, setCropData] = useState(Profile);
  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  useEffect(() => {
    setName("你的名字");
  }, []);

  return (
    <div className="App">
      <div className="merge">
        <Card name={name} cropData={cropData} />
        <Deal
          setInput={setInput}
          setName={setName}
          input={input}
          getCropData={getCropData}
          setCropper={setCropper}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
