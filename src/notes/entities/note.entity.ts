import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  title: string;
  @Column({ length: 255 })
  content: string;
  @CreateDateColumn()
  createAt: number;
  @UpdateDateColumn()
  updateAt: number;
  @DeleteDateColumn()
  deleteAt: number;
}
