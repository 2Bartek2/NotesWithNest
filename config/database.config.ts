import { DataSourceOptions } from "typeorm";
import {config} from 'dotenv'

config();


const databaseConfig : DataSourceOptions ={
    type: 'mysql',
      host: process.env.DATABASE_HOST, 
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD, 
      database: process.env.DATABASE_DB,
      entities: ['./**/*.entity.js'],
      synchronize: false,
      migrations:[__dirname + '/../src/migrations/*.js'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      logging:true

}


      
      
export default databaseConfig;