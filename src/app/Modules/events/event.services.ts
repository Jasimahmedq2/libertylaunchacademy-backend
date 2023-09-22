import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const addEvent = async (payload: IEvent): Promise<IEvent> => {
  const result = await Event.create(payload);
  return result;
};

const retrieveEvents = async (payload: {
  filterDate?: Date;
  searchTerm?: string;
}): Promise<IEvent[]> => {
  const { searchTerm, filterDate } = payload;
  const andConditions: any = [];

  if (searchTerm) {
    andConditions.push({
      $or: ["name", "description", "location"].map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (filterDate) {
    andConditions.push({
      $and: [{ start_date: { $gte: filterDate } }],
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Event.find(whereConditions);
  return result;
};

export const EventServices = {
  addEvent,
  retrieveEvents,
};
