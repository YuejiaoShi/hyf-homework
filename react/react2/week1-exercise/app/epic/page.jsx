"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_KEY = "jZ3XQ22AOCq4X1D1Qz2XWfE4I82l1C6uZETbQWn8";

function EPIC() {
  const [epicImage, setEpicImage] = useState(null);
  const [error, setError] = useState("");
  const query = useSearchParams();
  const date = query.get("date");

  useEffect(() => {
    if (!date) return;

    const fetchEPICImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${data[0].date
            .split(" ")[0]
            .replace(/-/g, "/")}/png/${data[0].image}.png?api_key=${API_KEY}`;
          setEpicImage(imageUrl);
        } else {
          setError("No images found for this date.");
        }
      } catch (err) {
        setError("Failed to fetch image: " + err.message);
      }
    };

    fetchEPICImage();
  }, [date]);

  return (
    <div>
      {error && <p>{error}</p>}
      {epicImage ? (
        <>
          <img src={epicImage} alt={`NASA EPIC image for ${date}`} />
          <figcaption>EPIC image for {date}</figcaption>
        </>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default EPIC;
