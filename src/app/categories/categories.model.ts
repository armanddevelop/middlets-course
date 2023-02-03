import { BaseModel } from '../base.model';

export enum CATEGORIESTYPES {
  HOME = 'hogar',
  PET = 'mascotas',
  KITCHEN = 'cocina',
}

export interface Category extends BaseModel {
  name: string;
  typeCategorie: CATEGORIESTYPES;
}
