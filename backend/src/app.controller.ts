// backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers()
  {
    return this.appService.send_json();
  }
  @Get('state')
  getState()
  {
    return this.appService.sendState();
  }
}