export class Genre {
  id: number | undefined;
  name: string | undefined;
}

export class DbGenre extends Genre {
  _id: string | undefined;
}
