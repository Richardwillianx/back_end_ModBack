import { Request, Response } from "express";
import { usersApp } from "../../db/users";

export class ChangeArchivedStatusController {
  change(request: Request, response: Response) {
    const { userId, id } = request.params;
    const { archived } = request.body;

    const user = usersApp.find((user) => userId === user.id);

    const messageFound = user?.message.find((mesg) => id === mesg.id);

    messageFound?.alterarStatusArquivo(archived);

    return response.status(200).json(messageFound);
  }
}
