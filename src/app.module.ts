import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesModule } from './notes/notes.module';
import { NotesService } from './notes/notes.service';
import { TypeOrmModule } from '@nestjs/typeorm'



@Module({
  imports: [NotesModule, TypeOrmModule.forRoot({
    type: 'mysql', // type of our database
    host: 'localhost', // database host
    port: 3307, // database host
    username: 'user', // username
    password: 'password', // user password
    database: 'db', // name of our database,
    //entities: [Note],
    autoLoadEntities: true, // models will be loaded automatically 
    synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
