import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    AppointmentsModule,
    FacilitiesModule,
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
