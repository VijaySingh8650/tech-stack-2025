import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controllers are used to define the routes and http methods

@Controller({
  path: 'user',
}) // "/user"
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // GET method "/user/hello"
  getHello(): string {
    return this.appService.getHello();
  }
}
