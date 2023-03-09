import { createStore } from 'vuex';
import { InputFriendlyNumber } from '../types';
import { INITIAL_STATE } from './constants';
import { Results, State } from './types';

const store = createStore<State>({
  state: () => INITIAL_STATE,
  mutations: {
    incrementAttempts(state: State) {
      state.attempts = state.attempts + 1;
    },
    setDrawSpeed(state: State, { drawSpeed }: { drawSpeed: number }) {
      state.drawSpeed = drawSpeed;
    },
    setDrawnNumbers(
      state: State,
      { drawnNumbers }: { drawnNumbers: InputFriendlyNumber[] }
    ) {
      state.drawnNumbers = drawnNumbers;
    },
    setIsUsingRandomValues(
      state: State,
      { isUsingRandomValues }: { isUsingRandomValues: boolean }
    ) {
      state.isUsingRandomValues = isUsingRandomValues;
    },
    setNumbersInPlay(
      state: State,
      { numbersInPlay }: { numbersInPlay: InputFriendlyNumber[] }
    ) {
      state.numbersInPlay = numbersInPlay;
    },
    setResults(state: State, results: Results) {
      state.results = { ...results };
    },
    stopDraw(state: State) {
      state.isDrawing = false;
    },
  },
  actions: {
    incrementAttempts({ commit }) {
      commit('incrementAttempts');
    },
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
    setResults({ commit }, results: Results) {
      commit('setResults', results);
    },
    stopDraw({ commit }) {
      commit('stopDraw');
    },
  },
  getters: {
    attempts(state: State): number {
      return state.attempts;
    },
    drawnNumbers(state: State): InputFriendlyNumber[] {
      return state.drawnNumbers;
    },
    drawSpeed(state: State): number {
      return state.drawSpeed;
    },
    isDrawing(state: State): boolean {
      return state.isDrawing;
    },
    isUsingRandomValues(state: State): boolean {
      return state.isUsingRandomValues;
    },
    numbersInPlay(state: State): InputFriendlyNumber[] {
      return state.numbersInPlay;
    },
    results(state: State): Results {
      return state.results;
    },
  },
});

export default store;
