import { EntityRepository, Repository } from "typeorm";
import { Ejercicio } from "../entities/ejercicio";

@EntityRepository(Ejercicio)
export class EjercicioRepository extends Repository<Ejercicio> {}