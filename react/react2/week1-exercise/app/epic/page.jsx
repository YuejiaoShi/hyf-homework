"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${data[0].date
            .split(" ")[0]
            .replace(/-/g, "/")}/png/${data[0].image}.png?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }`;
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
    router.push("/epic?date=2019-05-30");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <p className="mb-4 text-gray-700">
        Enter a date (YYYY-MM-DD) in the URL to fetch an EPIC image. Example:
        <code className="font-mono text-blue-600"> /epic?date=2019-05-30</code>
      </p>
      <button
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200"
        onClick={handleNavigate}
      >
        Click to View EPIC Image for 2019-05-30
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {epicImage ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={epicImage}
            alt={`NASA EPIC image for ${date}`}
            className="w-4/5 rounded-lg shadow-lg mt-4"
          />
          <figcaption className="mt-2 text-center text-gray-600">
            EPIC image for {date}
          </figcaption>
        </div>
      ) : date ? (
        <p className="mt-4 text-gray-600">Loading image...</p>
      ) : null}
    </div>
  );
}

export default EPIC;
