import { EventRepository } from "./event.repository";
import {Args, Query, Resolver} from "@nestjs/graphql";
import {EventQueryInput} from "../graphql";


@Resolver()
export class EventQueryResolver {
  constructor(private eventRepo: EventRepository) {
  }

@Query()
  async events(@Args("criteria") criteria: EventQueryInput | undefined): Promise<Event[]> {
    const id = criteria?.id ?? '';
    console.log(id)
    return Promise.resolve(
      this.eventRepo.findAll(id)
    )
  }
}
