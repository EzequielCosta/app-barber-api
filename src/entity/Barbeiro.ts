import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Barbeiro{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    username: string;

    @Column({
        nullable: true
    })
    email: string

    @Column()
    telefone: string;

    @Column({
        length: 11
    })
    cpf: string

    @Column()
    admin: boolean;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

}