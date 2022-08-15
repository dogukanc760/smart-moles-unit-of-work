import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/libs/constants/constants';
import { Permissions } from 'src/model/users/permissions.entity';
import { Roles } from 'src/model/users/roles.entity';
import { Users } from 'src/model/users/users.entity';
import { JwtStrategy } from '../localStrategies/jwt.strategy';
import { LocalStrategy } from '../localStrategies/local.strategy';
import { PermissionsModule } from './userClaims/permissions/permissions.module';
import { PermissionsService } from './userClaims/permissions/permissions.service';
import { RolesModule } from './userClaims/roles/roles.module';
import { RolesService } from './userClaims/roles/roles.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Roles, Permissions]),
    RolesModule,
    PermissionsModule,
   
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    UsersService,
    LocalStrategy,
    JwtStrategy,
    RolesService,
    PermissionsService,
  ],
  controllers: [UsersController],
  exports: [UsersService, RolesService, PermissionsService],
})
export class UsersModule {}
