const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("server running");
});

app.get("/check", (req, res) => {
	res.json(process.env);
});

app.get("/update", (req, res) => {
	res.send("I am updated");
});
const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
