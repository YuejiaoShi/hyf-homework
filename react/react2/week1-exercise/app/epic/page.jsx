"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_KEY = "jZ3XQ22AOCq4X1D1Qz2XWfE4I82l1C6uZETbQWn8";

function EPIC() {
  const [epicImage, setEpicImage] = useState(null);
  const [error, setError] = useState("");
  const query = useSearchParams();
  const date = query.get("date");

  const router = useRouter();

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

  const handleNavigate = () => {
    router.push("/epic?date=2021-01-01");
  };

  return (
    <div>
      <p>
        Enter a date (YYYY-MM-DD) in the URL to fetch an EPIC image. Example:
        /epic?date=2019-05-30
      </p>
      <button onClick={handleNavigate}>View EPIC Image for 2019-05-30</button>
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
