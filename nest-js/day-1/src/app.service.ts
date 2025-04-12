import { Injectable } from '@nestjs/common';

//logics are written here

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
