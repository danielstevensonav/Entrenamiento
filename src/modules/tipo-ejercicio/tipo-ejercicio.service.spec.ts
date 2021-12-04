import { Test, TestingModule } from '@nestjs/testing';
import { TipoEjercicioService } from './tipo-ejercicio.service';

describe('TipoEjercicioService', () => {
  let service: TipoEjercicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoEjercicioService],
    }).compile();

    service = module.get<TipoEjercicioService>(TipoEjercicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
