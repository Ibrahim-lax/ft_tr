// backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // <-- Make sure this says 'users'
  getUsers() {
    return this.appService.send_json();
  }
}