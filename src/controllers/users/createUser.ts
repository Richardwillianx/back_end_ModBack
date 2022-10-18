import { Request, Response } from "express";
import { usersApp } from "../../db/users";
import { User } from "../../models/user";

export class CreateNewuser {
  createUser(request: Request, response: Response) {
    const { name, email } = request.body;

    const user = new User(name, email);

    usersApp.push(user);

    return response.json(user.toReturn());
  }
}
