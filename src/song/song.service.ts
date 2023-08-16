import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}

  async create(song: Song): Promise<Song> {
    return await this.songRepository.save(song);
  }

  async findAll(): Promise<Song[]> {
    return await this.songRepository.find();
  }

  async findOne(id: string): Promise<Song> {
    return await this.songRepository.findOneBy({ id });
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    return await this.songRepository.update(id, updateSongDto);
  }

  async remove(id: string) {
    return await this.songRepository.delete({ id });
  }
}
