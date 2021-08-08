import {Injectable} from "@nestjs/common";
import {EventInput, EventQueryInput} from "../graphql";

@Injectable()
export class EventRepository {
  _store = [];

  createOne(event: EventInput) {
    const id = this._store.length + "";
    this._store.push({
      id,
      invite: event.invite,
      name: event.name,
      description: event.description,
      startTime: event.startTime,
      endTime: event.endTime,
      type: event.type,
      link: event.link,
      mask: event.mask,
      test: event.test,
      guests: event.guests,
      color: event.color
    })
    return id;
  }

  findAll(id: string): Event[] {
    if(id === ''){
      return this._store;
    }
    return this._store.filter(event => {return event.id === id});
  }
}
