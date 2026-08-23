const express = require("express");
const skillRoutes = require("./routes/skillRoutes");

const app = express();

app.use(express.json());

app.use("/api/skills", skillRoutes);

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});