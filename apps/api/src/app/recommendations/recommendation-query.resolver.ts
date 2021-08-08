import { RecommendationRepository } from "./recommendation.repository";
import {Args, Query, Resolver} from "@nestjs/graphql";
import {Recommendation, RecQueryInput} from "../graphql";


@Resolver()
export class RecommendationQueryResolver {
  constructor(private recRepo: RecommendationRepository) {
  }

  @Query()
  async recommendations(@Args("criteria") criteria: RecQueryInput): Promise<Recommendation> {
    return Promise.resolve(
      this.recRepo.findOne(criteria)
    )
  }
}
