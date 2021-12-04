import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoEjercicioModule } from './modules/tipo-ejercicio/tipo-ejercicio.module';
import { EjercicioModule } from './modules/ejercicio/ejercicio.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TipoEjercicioModule, EjercicioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
