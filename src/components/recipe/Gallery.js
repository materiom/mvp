// Dependencies
import React from "react";

export default function Gallery(props) {
  // Function to return an array of pictures
  const galleryArray = props.gallery.map((picture) => {
    return (
      <div key={picture.src} className="flex min-w-[33%] max-w-[33%] p-5">
        <img
          className=" object-cover aspect-video min-w-[33%] min-h-[3.5rem] rounded-lg"
          src={`https://materiom.org/storage/${picture.src}`}
          alt={`${picture.name}`}
        />
      </div>
    );
  });
  return <div className="w-full flex overflow-hidden">{galleryArray}</div>;
}
