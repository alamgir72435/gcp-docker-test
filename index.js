const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("server running");
});

app.get("/check", (req, res) => {
	res.json(process.env);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
