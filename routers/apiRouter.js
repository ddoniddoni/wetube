import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
