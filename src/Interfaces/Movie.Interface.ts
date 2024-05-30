export interface IMovie {
  _id?: string;
  name: string;
  rel_date: Date;
  budget: string;
  collections?: string;
  Director?: string;
  Actor: string;
  Producer: string;
}
