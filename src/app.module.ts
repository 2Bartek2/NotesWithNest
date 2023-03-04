import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'config/database.config';

@Module({
  imports: [
    NotesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
