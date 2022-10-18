import { Express } from "express";
import { CreateNewMessageController } from "./controllers/message/createMessage";
import { GetUserController } from "./controllers/users/getUserById";
import { EditMessageController } from "./controllers/message/editMessage";
import { DeleteMessageController } from "./controllers/message/deleteMessage";
import { CreateNewuser } from "./controllers/users/createUser";
import { GetAllUsersController } from "./controllers/users/getAllUsers";
import { EditUserController } from "./controllers/users/editUser";
import { DeleteUserController } from "./controllers/users/deleteUser";
import { ValidateUserMiddleware } from "./middlewares/validateUser";
import { ChangeArchivedStatusController } from "./controllers/message/changeArchivedStatusController";

export default (app: Express) => {
  app.post("/user", new CreateNewuser().createUser);
  app.get("/user", new GetAllUsersController().getAll);
  app.get(
    "/user/:id",
    new ValidateUserMiddleware().validateUser,
    new GetUserController().getUserById
  );
  app.put(
    "/user/:id",
    new ValidateUserMiddleware().validateUser,
    new EditUserController().editUser
  );
  app.delete(
    "/user/:id",
    new ValidateUserMiddleware().validateUser,
    new DeleteUserController().deleteUser
  );

  app.post(
    "/user/:id/message",
    new ValidateUserMiddleware().validateUser,
    new CreateNewMessageController().createMessage
  );

  app.get(
    "/user/:userId/message/:id",
    new ValidateUserMiddleware().validateUser
  );
  app.put(
    "/user/:userId/message/:id",
    new ValidateUserMiddleware().validateUser,
    new EditMessageController().editMessage
  );
  app.delete(
    "/user/:userId/message/:id",
    new ValidateUserMiddleware().validateUser,
    new DeleteMessageController().deleteMessage
  );

  app.get(
    "/user/:userId/transactions",
    new ValidateUserMiddleware().validateUser
  );

  app.put(
    "/user/:userId/message/:id/archived",
    new ValidateUserMiddleware().validateUser,
    new ChangeArchivedStatusController().change
  );
};
