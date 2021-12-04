import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { TipoEjercicio } from "./tipo-ejercicio";

@Entity('ejercicio')
export class Ejercicio extends BaseEntity {

    @PrimaryColumn()
    id_ejercicio: number;

    @Column({nullable: false})
    nombre_ejercicio: string;

    @Column({nullable: false})
    dsc_ejercicio: string;

    @ManyToOne(() => TipoEjercicio, (tipoEjercicio) => tipoEjercicio.ejercicio)
    @JoinColumn({ name: 'id_tipo_ejercicio', referencedColumnName: 'id_tipo_ejercicio' })
    tipoEjercicio: TipoEjercicio;

}
