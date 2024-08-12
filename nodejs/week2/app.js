import express from "express";
import { readFile } from "fs/promises";

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    const filePath = new URL("./documents.json", import.meta.url);
    const contents = await readFile(filePath, { encoding: "utf8" });
    const documents = JSON.parse(contents);

    if (!q) {
      return res.json(documents);
    } else {
      const filteredDocs = documents.filter((doc) =>
        Object.values(doc).some(
          (value) =>
            value !== undefined &&
            value.toString().toLowerCase().includes(q.toLowerCase())
        )
      );
      return res.json(filteredDocs);
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
