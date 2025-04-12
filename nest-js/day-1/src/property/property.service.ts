import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getAllProperties() {
    return 'All Properties are here';
  }

  createProperty() {
    return 'It will create new property';
  }

  getOneProperty(id: string) {
    return `It will get property ${id}`;
  }

  updateProperty(id: string) {
    return `It will update property ${id}`;
  }
}
