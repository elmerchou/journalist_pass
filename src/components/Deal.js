import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Profile from "./img/profile-image-placeholder.jpg";

function print() {
  window.print();
}

const defaultSrc = Profile;

function Deal({ setInput, setName, input, getCropData, setCropper }) {
  const [image, setImage] = useState(defaultSrc);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const nameHandler = () => {
    setName(input);
  };

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  // const cropperRef = useRef < HTMLImageElement > null;
  // const onCrop = () => {
  //   const imageElement = cropperRef?.current;
  //   const cropper = imageElement?.cropper;
  //   console.log(cropper.getCroppedCanvas().toDataURL());
  // };

  return (
    <div className="deal no-print">
      <p className="title">公民記者證產生器</p>
      <p>
        公民記者，又稱民間記者，是指傳統傳媒體系以外的新聞工作者，包含已脫離一般傳媒機構、以獨立身分對事件做出報導的人，或者對新聞工作有興趣的業餘人士。敬請製作並列印出屬於自己的公民記者證，捍衛屬於自己的新聞自由。
      </p>
      <p>請盡量以電腦設備使用本網站以確保列印品質。</p>
      <div>
        <input
          type="text"
          maxlength="20"
          placeholder="在此輸入您的姓名"
          onChange={inputHandler}
        />
        <button onClick={nameHandler}>填入姓名</button>
      </div>
      <Cropper
        className="cropper"
        // preview={require("./img/profile-image-placeholder.png")}
        src={image}
        style={{ height: 300, width: "90%" }}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        background={false}
        aspectRatio={1 / 1}
      />
      <div className="buttonBar">
        <label for="file1">檔案上傳</label>
        <input
          style={{ display: "none" }}
          id="file1"
          type="file"
          onChange={onChange}
          accept="image/*"
        />
        <label onClick={getCropData}>嵌入圖片</label>
        <label className="print" onClick={print}>
          列印
        </label>
      </div>
    </div>
  );
}

export default Deal;
