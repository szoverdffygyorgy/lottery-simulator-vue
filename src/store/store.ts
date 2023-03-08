import { createStore } from 'vuex';
import { INITIAL_DRAW_SPEED, NUMBER_OF_NUMBERS_TO_DRAW } from '../constants';
import { InputFriendlyNumber } from '../types';
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
  mutations: {
    setDrawSpeed(state: State, { drawSpeed }: { drawSpeed: number }) {
      state.drawSpeed = drawSpeed;

      return state;
    },
    setDrawnNumbers(
      state: State,
      { drawnNumbers }: { drawnNumbers: InputFriendlyNumber[] }
    ) {
      state.drawnNumbers = drawnNumbers;

      return state;
    },
    setIsUsingRandomValues(
      state: State,
      { isUsingRandomValues }: { isUsingRandomValues: boolean }
    ) {
      state.isUsingRandomValues = isUsingRandomValues;

      return state;
    },
    setNumbersInPlay(
      state: State,
      { numbersInPlay }: { numbersInPlay: InputFriendlyNumber[] }
    ) {
      state.numbersInPlay = numbersInPlay;

      return state;
    },
  },
  actions: {
    setDrawSpeed({ commit }, { drawSpeed }: { drawSpeed: number }) {
      commit('setDrawSpeed', { drawSpeed });
    },
    setDrawnNumbers(
      { commit },
      { drawnNumbers }: { drawnNumbers: InputFriendlyNumber[] }
    ) {
      commit('setDrawnNumbers', { drawnNumbers });
    },
    setIsUsingRandomValues(
      { commit },
      { isUsingRandomValues }: { isUsingRandomValues: boolean }
    ) {
      commit('setIsUsingRandomValues', { isUsingRandomValues });
    },
    setNumbersInPlay(
      { commit },
      { numbersInPlay }: { numbersInPlay: InputFriendlyNumber[] }
    ) {
      commit('setNumbersInPlay', { numbersInPlay });
    },
  },
  getters: {
    attempts(state: State) {
      return state.attempts;
    },
    drawnNumbers(state: State) {
      return state.drawnNumbers;
    },
    drawSpeed(state: State) {
      return state.drawSpeed;
    },
    isDrawing(state: State) {
      return state.isDrawing;
    },
    isUsingRandomValues(state: State) {
      return state.isUsingRandomValues;
    },
    numbersInPlay(state: State) {
      return state.numbersInPlay;
    },
    results(state: State) {
      return state.results;
    },
  },
});

export default store;
