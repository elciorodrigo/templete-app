import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipamentsService } from './equipaments.service';
import { CreateEquipamentDto } from './dto/create-equipament.dto';
import { UpdateEquipamentDto } from './dto/update-equipament.dto';

@Controller('equipaments')
export class EquipamentsController {
  constructor(private readonly equipamentsService: EquipamentsService) {}

  @Post()
  create(@Body() createEquipamentDto: CreateEquipamentDto) {
    return this.equipamentsService.create(createEquipamentDto);
  }

  @Get()
  findAll() {
    return this.equipamentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipamentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipamentDto: UpdateEquipamentDto) {
    return this.equipamentsService.update(+id, updateEquipamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipamentsService.remove(+id);
  }
}
