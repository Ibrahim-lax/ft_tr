// backend/src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HELLO ';
  }
  send_json()
  {
    const users = [
      { id: 1, user: "ibrahim", task: "coding" },
      { id: 2, user: "rafik", task: "coding" },
      { id: 3, user: "yousef", task: "coding" },
      { id: 4, user: "marwan", task: "coding" },
    ];
    return users;
  }
  sendState()
  {
        const state = [
      { id: 1, user: "ibrahim", state: "msafer" },
      { id: 2, user: "rafik", state: "flecole" },
      { id: 3, user: "yousef", state: "fl jbl" },
      { id: 4, user: "marwan", state: "f 13" },
    ];
    return state;
  }
}
