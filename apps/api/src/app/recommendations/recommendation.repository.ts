import {Injectable} from "@nestjs/common";
import {RecQueryInput, Recommendation} from "../graphql";
import {recommendations} from "../../../../../libs/data/recommendations";

@Injectable()
export class RecommendationRepository {
  _store = recommendations;

  findOne(criteria: RecQueryInput): Recommendation {
    return this._store.filter(rec => {return rec.type === criteria.type})[0];
  }
}
