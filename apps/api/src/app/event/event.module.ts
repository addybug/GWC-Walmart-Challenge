import { Module } from "@nestjs/common";
import {EventRepository} from "./event.repository";
import {EventMutationResolver} from "./event-mutation.resolver";
import {EventQueryResolver} from "./event-query.resolver";

@Module({
  providers: [
    EventRepository,
    EventMutationResolver,
    EventQueryResolver
  ]
})
export class EventModule {

}
