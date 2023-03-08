import { InputFriendlyNumber } from '../types';

export type Results = {
  two: number;
  three: number;
  four: number;
  five: number;
};

export type State = {
  attempts: number;
  drawnNumbers: InputFriendlyNumber[];
  drawSpeed: number;
  isDrawing: boolean;
  isUsingRandomValues: boolean;
  numbersInPlay: InputFriendlyNumber[];
  results: Results;
};
