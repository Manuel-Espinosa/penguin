import express from "express";
const app = express();
const port = 6060;

app.use(express.static("./public"));

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
})

