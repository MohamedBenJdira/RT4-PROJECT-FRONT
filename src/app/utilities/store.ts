import { Genre } from "../dto/genres/genre";
import { BehaviorSubject } from "rxjs";

export const genres: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>(
  []
);