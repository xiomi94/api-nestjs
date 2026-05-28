import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum PetType {
  Dog = 'dog',
  Cat = 'cat',
}

@Table
export class Pet extends Model {
  @Column
  name!: string;

  @Column({
    type: DataType.ENUM(...Object.values(PetType)),
    allowNull: false,
  })
  type!: PetType;
}
