import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipamentsModule } from './equipaments/equipaments.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
    }),
    SongModule,
    EquipamentsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
