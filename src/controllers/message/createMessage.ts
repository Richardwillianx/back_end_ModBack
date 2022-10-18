import { Request, Response } from "express";
import { usersApp } from "../../db/users";
import { Message } from "../../models/message";

export class CreateNewMessageController {
  createMessage(request: Request, response: Response) {
    const { title, message } = request.body;

    const { id } = request.params;

    if (!title) {
      return response.status(400).json({ message: "Dados inválidos" });
    }

    const user = usersApp.find((user) => id === user.id);

    const recado = new Message(title, message);

    user?.message.push(recado);

    return response.status(200).json({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      message: user?.message.map((message) => {
        return {
          id: message.id,
          title: message.title,
          message: message.message,
        };
      }),
    });
  }
}
