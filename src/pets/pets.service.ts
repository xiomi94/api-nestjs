import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet)
    private petModel: typeof Pet,
  ) {}

  create(createPetDto: CreatePetDto) {
    return this.petModel.create(createPetDto as any);
  }

  findAll() {
    return this.petModel.findAll();
  }

  findOne(id: number) {
    return this.petModel.findByPk(id);
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const pet = await this.petModel.findByPk(id);
    if (!pet) return null;

    return pet.update(updatePetDto);
  }

  async remove(id: number) {
    const pet = await this.petModel.findByPk(id);
    if (!pet) return null;

    await pet.destroy();
    return pet;
  }
}
