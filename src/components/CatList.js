import React from "react";

function CatsList({ catImageList }) {
  const renderCatImages = () => {
    const renderedList = catImageList.map(({ altText, imageUrl }, i) => (
      <div className="cat-image-wrapper" key={`catImage${i}`}>
        <img alt={altText} src={imageUrl} />
      </div>
    ));
    return renderedList;
  };
  return (
    <div className="cat-list-component">
      {catImageList.length && renderCatImages()}
    </div>
  );
}
export default CatsList;
