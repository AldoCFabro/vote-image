import { ICompetitor } from './Competitor';

export interface IShowInfoCard {
  name: string;
  webformatURL: string;
  id: string;
}
export interface IGameState {
  competitors: Array<ICompetitor>;
  showImagesCard: Array<IShowInfoCard>;
  highScore: number;
  hasError: string;
}
