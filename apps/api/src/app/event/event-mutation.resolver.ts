import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {EventRepository} from "./event.repository";
import {EventInput, EventResponse} from "../graphql";

@Resolver()
export class EventMutationResolver {
  constructor(private eventRepo: EventRepository) {
  }

  @Mutation()
  async addEvent(@Args("event") event: EventInput): Promise<EventResponse> {
    const id = this.eventRepo.createOne(event);
    console.log(this.eventRepo._store)
    return Promise.resolve(
      {id: id}
    )
  }
}
