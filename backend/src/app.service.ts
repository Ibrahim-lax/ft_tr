import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HELLO ';
  }
  send_json() {
    // 1. In JS, an object with the same keys (like "id") will overwrite itself.
    // To send a list, we use an ARRAY [] of objects {}.
    const users = {
      { id: 1, user: "ibrahim", task: "coding" },
      { id: 2, user: "rafik", task: "coding" },
      { id: 3, user: "yousef", task: "coding" },
      { id: 4, user: "marwan", task: "coding" },
  };

    // 2. Just return the array. NestJS handles the JSON conversion.
    return users;
}}
