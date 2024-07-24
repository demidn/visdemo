import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column()
  name: string;

  @Column({ default: 0, type: "int" })
  sales = 0;

  @Column({ default: 0, type: "int" })
  averageSalary = 0;

  constructor(id: string | undefined, name: string) {
    this.id = id;
    this.name = name;
  }
}
