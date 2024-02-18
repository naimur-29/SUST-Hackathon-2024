require("dotenv").config();
const express = require("express");
const cors = require("cors");

// local imports:
const { connectDb } = require("./services/db");
// routers:
const userRouter = require("./routers/user.routes");
const languagePairRouter = require("./routers/languagePair.routes");
const historyRouter = require("./routers/history.routes");

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db:
connectDb();

app.use(express.json());

// Enable CORS:
const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
};
app.use(cors(corsOptions));

// add routers:
app.use("/api/user", userRouter);
app.use("/api/pair", languagePairRouter);
app.use("/api/history", historyRouter);

// start server:
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
