import React from "react";

function Gallery(props) {
  const galleryArray = props.gallery.map((picture) => {
    return (
      <div key={picture.src} className="flex min-w-[33%] max-w-[33%] p-5">
        <img
          className=" aspect-video min-h-[3.5rem] min-w-[33%] rounded-lg object-cover"
          src={`https://materiom.org/storage/${picture.src}`}
          alt={`${picture.name}`}
        />
      </div>
    );
  });

  return <div className="flex w-full overflow-hidden">{galleryArray}</div>;
}
export default Gallery;
