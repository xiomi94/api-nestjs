import { PetType } from '../entities/pet.entity';

export class CreatePetDto {
  name!: string;
  type!: PetType;
}
