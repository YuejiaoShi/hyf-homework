"use client";
import { useEffect, useState } from "react";


function RoverPhotos() {
  const [roverPhoto, setRoverPhoto] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setRoverPhoto(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRoverPhotos();
  }, []);

  function RoverPhoto({ src, date, roverName }) {
    return (
      <div>
        <img
          src={src}
          alt={`Photo taken by Rover ${roverName} on ${date}`}
          className="w-56 h-56"
        />
        <p>Taken on {date}</p>
        <p>Rover: {roverName}</p>
      </div>
    );
  }

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : roverPhoto?.photos?.length ? (
        <div className="flex flex-wrap justify-center gap-4">
          {roverPhoto.photos.map((photo) => (
            <RoverPhoto
              key={photo.id}
              src={photo.img_src}
              date={photo.earth_date}
              roverName={photo.rover.name}
            />
          ))}
        </div>
      ) : (
        <p>Loading rover photos...</p>
      )}
    </div>
  );
}

export default RoverPhotos;
