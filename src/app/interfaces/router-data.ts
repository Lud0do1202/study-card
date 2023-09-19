import { Card } from './card';
import { Topic } from './topic';

export interface RouterData {
  topic?: Topic;
  card?: Card;
  cards?: Card[];
  correctAnswers?: Card[];
  wrongAnswers?: Card[];
}
