import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from "public" directory

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { rss: null });
});

app.post("/calcul", (req, res) => {
  const { salery, day } = req.body; // Use names from form
  const tot = salery * day;
  const finall = `${tot} DA`
  res.render("index", { rss: finall });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
