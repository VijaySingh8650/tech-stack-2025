import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PropertyModule],
  controllers: [AppController], //http methods & routes
  providers: [AppService], //all logic related
})
export class AppModule {}
