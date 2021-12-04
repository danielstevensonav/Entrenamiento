import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ejercicio } from '../entities/ejercicio';
import { EjercicioService } from './ejercicio.service';

@Controller('ejercicio')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  create(@Body() ejercicio: Ejercicio) {
    return this.ejercicioService.create(ejercicio);
  }

  @Get()
  findAll() {
    return this.ejercicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejercicioService.findOne(+id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioDto: UpdateEjercicioDto) {
    return this.ejercicioService.update(+id, updateEjercicioDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioService.remove(+id);
  }
}
