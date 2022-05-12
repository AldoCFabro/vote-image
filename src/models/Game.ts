import { ICompetitor } from './Competitor';

export interface IShowInfoCard {
  name: string;
  webformatURL: string;
  id: string;
}
export interface IGameState {
  competitors: Array<ICompetitor>;
  winner: ICompetitor | null;
  hasError: string;
  message: string;
}
