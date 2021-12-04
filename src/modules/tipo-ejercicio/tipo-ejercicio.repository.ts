import { EntityRepository, Repository } from "typeorm";
import { TipoEjercicio } from "../entities/tipo-ejercicio";

@EntityRepository(TipoEjercicio)
export class TipoEjercicioRepository extends Repository<TipoEjercicio> {}