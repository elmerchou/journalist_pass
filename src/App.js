import React, { useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Deal from "./components/Deal";
import "cropperjs/dist/cropper.css";
import "./styles/style.css";
import profile from "./img/profile-image-placeholder.jpg";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("你的名字");

  const [cropData, setCropData] = useState(profile);

  const handleCrop = (dataURL) => {
    setCropData(dataURL);
  };

  return (
    <div className="App">
      <div className="merge">
        <Card name={name} cropData={cropData} />
        <Deal
          setInput={setInput}
          setName={setName}
          input={input}
          onCrop={handleCrop}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
