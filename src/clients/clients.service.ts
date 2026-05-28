import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientModel.create(createClientDto as any);
  }

  findAll() {
    return this.clientModel.findAll();
  }

  findOne(id: number) {
    return this.clientModel.findByPk(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientModel.findByPk(id);
    if (!client) return null;

    return client.update(updateClientDto);
  }

  async remove(id: number) {
    const client = await this.clientModel.findByPk(id);
    if (!client) return null;

    await client.destroy();
    return client;
  }
}
