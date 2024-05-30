export interface IMovieTime {
  _id?: string;
  movieId: string;
  movSlot: string;
  releaseDate: Date;
  theaterId: string;
  ticketPrice: number;
  totalSeats: number;
  availableSeats?: number;
}
