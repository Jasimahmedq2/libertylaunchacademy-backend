import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const addEvent = async (payload: IEvent): Promise<IEvent> => {
  const result = await Event.create(payload);
  return result;
};

const retrieveEvents = async (filter: {
  filterDate?: Date;
  searchTerm?: string;
}): Promise<IEvent[]> => {
  const result = await Event.find ({});
  return result;
};

export const EventServices = {
  addEvent,
  retrieveEvents,
};
