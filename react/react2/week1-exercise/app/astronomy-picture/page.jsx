async function AstronomyPicture() {
  const astronomyPictureURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(astronomyPictureURL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch AstronomyPicture data. Status: ${response.status}`
    );
  }

  const data = await response.json();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={data.url}
        alt="Astronomy Picture of the Day"
        className="w-full h-auto rounded-2xl shadow-lg mb-4"
      />
      <p className="text-gray-700 text-lg">{data.explanation}</p>
    </div>
  );
}

export default AstronomyPicture;
