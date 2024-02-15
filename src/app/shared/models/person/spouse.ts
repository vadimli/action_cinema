/*Инфо о супруге*/
export interface ISpouse {
  id: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  relation: string;
}
