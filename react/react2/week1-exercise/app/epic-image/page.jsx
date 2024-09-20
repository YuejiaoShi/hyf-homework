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
        setEpicImage(data);
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
        <img src={epicImage} alt="NASA EPIC" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default EPIC;
