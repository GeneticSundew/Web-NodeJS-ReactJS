import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Cadastro_aluno')
export class Cadastro{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 100})
    ra: string;

    @Column({length: 100})
    data_de_nascimento: string;

    @Column({length: 100})
    endereco: string;

    @Column({
        default: false
    })
    matriculado: boolean;

    @Column()
    idade: number;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}