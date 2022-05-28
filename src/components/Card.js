import React from "react";

const Card = ({ name, cropData }) => {
  return (
    <div class="card">
      <div class="card-body">
        <img src={cropData} alt="Profile Image" class="profile-img" />
        <p class="title">公民記者證</p>
        <p class="name">{name}</p>

        <p class="description">
          司法院釋字第 689 號：
          新聞自由所保障之新聞採訪自由並非僅保障隸屬於新聞機構之新聞記者之採訪行為，亦保障一般人為提供具新聞價值之資訊於眾，或為促進公共事務討論以監督政府，而從事之新聞採訪行為。
        </p>
      </div>

      <div class="card-footer">
        <p class="count">憲法保障人民的新聞自由</p>
      </div>
    </div>
  );
};

export default Card;
