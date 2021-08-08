import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {EventModule} from "./event/event.module";
import {RecommendationModule} from "./recommendations/recommendation.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    }),
    EventModule,
    RecommendationModule
  ]
})
export class AppModule {}
