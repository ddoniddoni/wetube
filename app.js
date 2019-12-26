import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet()); // application이 더 안전하도록 만들어주는 미들웨어
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // 주어진 directory에서 file을 전달하는 미들웨어
app.use("/static", express.static("static"));
app.use(cookieParser()); // cookie 를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true })); // 위와 동일
app.use(morgan("dev")); // application에서 발생하는 모든 일들을 logging 해주는 미들웨어

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
