import { Request, Response } from "express";
import { usersApp } from "../../db/users";

export class EditMessageController {
  editMessage(request: Request, response: Response) {
    const { userId, id } = request.params;
    const { title, message } = request.body;

    if (!title || !message) {
      return response.status(400).json({ message: "Dados inválidos" });
    }

    const user = usersApp.find((user) => userId === user.id);

    const messageFound = user?.message.find((mesg) => id === mesg.id);

    messageFound?.messageUpdate(title, message);

    return response.status(200).json(messageFound);
  }
}
