import { Model, Table, Column } from "sequelize-typescript";

@Table
export class Client extends Model{
    @Column
    name!: string;

    @Column
    surname!: string;
}
