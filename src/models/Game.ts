import { ICompetitor } from './Competitor';

export interface IShowInfoCard {
  name: string;
  urlImage: string;
  id: string;
}
export interface IGameState {
  competitors: Array<ICompetitor>;
  showImagesCard: Array<IShowInfoCard>;
}
