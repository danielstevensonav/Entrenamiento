import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'ec2-34-203-114-67.compute-1.amazonaws.com',
    port: 5432,
    username: 'ktgfkzbzsctwqv',
    password: '67c801ebde9454fc3193cd41ddb83c786f753c3a5e9ee26bd2628eef8e56a53e',
    database: 'd501mgb1lpo62g',
    entities: [__dirname + '/src/modules/entities/*{js,ts}'],
    synchronize: false,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
}