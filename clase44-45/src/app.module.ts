import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'test_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CharactersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
