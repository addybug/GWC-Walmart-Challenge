import { Module } from "@nestjs/common";
import {RecommendationRepository} from "./recommendation.repository";
import {RecommendationQueryResolver} from "./recommendation-query.resolver";

@Module({
  providers: [
    RecommendationRepository,
    RecommendationQueryResolver
  ]
})
export class RecommendationModule {

}
