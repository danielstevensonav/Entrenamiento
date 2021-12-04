import { Test, TestingModule } from '@nestjs/testing';
import { TipoEjercicioController } from './tipo-ejercicio.controller';
import { TipoEjercicioService } from './tipo-ejercicio.service';

describe('TipoEjercicioController', () => {
  let controller: TipoEjercicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoEjercicioController],
      providers: [TipoEjercicioService],
    }).compile();

    controller = module.get<TipoEjercicioController>(TipoEjercicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
