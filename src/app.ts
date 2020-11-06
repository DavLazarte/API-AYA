import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";
import categoryRoutes from "./routes/category.routes";
import entityRoutes from "./routes/entity.routes";
import farmaciaRoutes from "./routes/farmacia.routes";
//initializations
const PORT = process.env.PORT || '8080';
const app = express();
//settings
const corsOptions = {
  origin: "https://aya-nine.vercel.app/",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.set("port", PORT);

//middlewares
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
//routes
app.get("/", (req, res) => {
  res.send(`THE API is running at:${app.get("port")}`);
});

app.use(authRoutes);
app.use(specialRoutes);
app.use(farmaciaRoutes);
app.use(entityRoutes);
app.use(categoryRoutes);

export default app;
