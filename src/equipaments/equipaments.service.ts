import { Injectable } from '@nestjs/common';
import { CreateEquipamentDto } from './dto/create-equipament.dto';
import { UpdateEquipamentDto } from './dto/update-equipament.dto';

@Injectable()
export class EquipamentsService {
  create(createEquipamentDto: CreateEquipamentDto) {
    return 'This action adds a new equipament';
  }

  findAll() {
    return `This action returns all equipaments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipament`;
  }

  update(id: number, updateEquipamentDto: UpdateEquipamentDto) {
    return `This action updates a #${id} equipament`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipament`;
  }
}
