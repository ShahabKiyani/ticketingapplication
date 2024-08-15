import express from "express";
import "./db.js";
import ticketRoutes from "../routes/TicketRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

//app.use("/", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
