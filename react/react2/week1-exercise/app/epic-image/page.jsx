import { useRouter } from "next/router";

const API_KEY = "jZ3XQ22AOCq4X1D1Qz2XWfE4I82l1C6uZETbQWn8";

function EPIC() {
  const [epicImage, setEpicImage] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const { date } = router.query;

  useEffect(() => {
    const fetchEPICImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/${query_text}api_key=${API_KEY}`
        );
        const data = await response.json();
        setEpicImage(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEPICImage();
  }, []);

  return <div></div>;
}

export default EPIC;
