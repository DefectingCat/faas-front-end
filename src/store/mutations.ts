import { MutationTree } from 'vuex';
import type { State } from '../types/store';

type func = {
  funcName: string;
  funContext: string;
};
const mutations: MutationTree<State> = {
  saveFunc(state, func: func) {
    state.funcName = func.funcName;
    state.funContext = func.funContext;
  },
  cleanFunc(state) {
    state.funcName = '';
    state.funContext = '';
  },
};

export default mutations;
