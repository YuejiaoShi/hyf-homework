import express from "express";
import { readFile } from "fs/promises";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// three reusable utility functions
const loadDocuments = async () => {
  const filePath = new URL("./documents.json", import.meta.url);
  const contents = await readFile(filePath, { encoding: "utf8" });
  return JSON.parse(contents);
};

const filterDocsByQuery = (documents, query) => {
  return documents.filter((doc) =>
    Object.values(doc).some(
      (value) =>
        value !== undefined &&
        value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );
};

const filterDocsByFields = (documents, query) => {};

// GET /search
app.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    const documents = await loadDocuments();

    if (!q) {
      return res.json(documents);
    } else {
      const filteredDocs = filterDocsByQuery();
      return res.json(filteredDocs);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// GET /documents/:id
app.get("/documents/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("Invalid Id");
  }
  try {
    const documents = await loadDocuments();

    const filteredDoc = documents.find((doc) => doc.id === id);

    if (filteredDoc) {
      return res.json(filteredDoc);
    } else {
      return res.status(404).send("Document Not Found");
    }
  } catch (err) {
    console.error(err.message);
  }
});

// POST /search
app.post("/search", async (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    return res
      .status(400)
      .send("Cannot use both query parameter and request body.");
  }
  try {
    const documents = await loadDocuments();

    if (fields) {
      const filteredDocs = documents.filter((doc) =>
        Object.keys(fields).every(
          (key) => doc[key] !== undefined && fields[key] === doc[key]
        )
      );
      return res.json(filteredDocs);
    } else if (q) {
      const filteredDocs = filterDocsByQuery();
      return res.json(filteredDocs);
    } else {
      return res.status(400).send("Invalid request body/parameter");
    }

    console.log(fields);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
