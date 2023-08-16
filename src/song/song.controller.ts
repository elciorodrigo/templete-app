import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './entities/song.entity';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  async create(@Body() song: Song): Promise<Song> {
    return await this.songService.create(song);
  }

  @Get()
  findAll(): Promise<Song[]> {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songService.update(id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(id);
  }
}
