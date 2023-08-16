import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  genre: string;

  @Column()
  album: string;
}
