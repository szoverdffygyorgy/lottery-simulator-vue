import { createStore } from 'vuex';
import { INITIAL_DRAW_SPEED, NUMBER_OF_NUMBERS_TO_DRAW } from '../constants';
import { State } from './types';

const store = createStore<State>({
  state: () => ({
    attempts: 0,
    drawnNumbers: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
    drawSpeed: INITIAL_DRAW_SPEED,
    isDrawing: true,
    isUsingRandomValues: false,
    numbersInPlay: Array.from({ length: NUMBER_OF_NUMBERS_TO_DRAW }, () => ''),
    results: {
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    },
  }),
  mutations: {},
});

export default store;
