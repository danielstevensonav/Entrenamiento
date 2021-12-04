import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejercicio } from '../entities/ejercicio';
import { EjercicioRepository } from './ejercico.repository';


@Injectable()
export class EjercicioService {

  constructor(
    @InjectRepository(Ejercicio)
    private ejercicioRepository: EjercicioRepository,
  ) {}

  create(ejercicio: Ejercicio) {
    console.log(ejercicio);
    return this.ejercicioRepository.save(ejercicio);
  }

  findAll() {
    return `This action returns all ejercicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ejercicio`;
  }

  /* update(id: number, updateEjercicioDto: UpdateEjercicioDto) {
    return `This action updates a #${id} ejercicio`;
  } */

  remove(id: number) {
    return `This action removes a #${id} ejercicio`;
  }
}
