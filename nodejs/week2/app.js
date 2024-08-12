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

app.get("/documents/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("Invalid Id");
  }
  try {
    const filePath = new URL("./documents.json", import.meta.url);
    const contents = await readFile(filePath, { encoding: "utf8" });
    const documents = JSON.parse(contents);
    if (isNaN(id)) {
      return res.status(400).send("Invalid Id");
    }
    const filteredDoc = documents.filter((doc) => doc.id === id);
    return res.json(filteredDoc);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
