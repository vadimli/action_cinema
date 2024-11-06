export interface IPerson {
  /*Id персоны с кинопоиска*/
  id?: number | null;
  photo?: string | null;
  name?: string | null;
  enName?: string | null;
  description: string;
  profession: string;
  enProfession: string;
}
