import crypto from "crypto";
import { request } from "https";
import { Message } from "./message";

export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _message: Message[] = [];

  constructor(name: string, email: string) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._email = email;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }
  get message() {
    return this._message;
  }
  userUpdate(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  toReturn() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
    };
  }
}
