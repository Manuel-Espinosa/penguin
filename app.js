import express from "express";
import bodyParser from "body-parser";
import { productRoutes } from "./routes/products-routes.js";
import { makerRoutes } from "./routes/maker-routes.js";
import { createStudent, getStudent, getAllStudents} from "./mongoose.js";
const PORT = 5000;
const app = express();

app.use(bodyParser.json());


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.post("/api/students/createStudent", createStudent);
app.get("/api/students/:id", getStudent);
app.get("/api/students/", getAllStudents);


app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});

