import { Controller, Get, Patch, Post, Param } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly appService: PropertyService) {}
  @Get()
  findAll() {
    return this.appService.getAllProperties();
  }

  @Post()
  createProperty() {
    return this.appService.createProperty();
  }

  @Get(':id')
  getOneProperty(@Param('id') id: string) {
    return this.appService.getOneProperty(id);
  }

  @Patch(':id')
  updateProperty(@Param('id') id: string) {
    return this.appService.updateProperty(id);
  }
}
