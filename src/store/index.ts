import { createStore } from 'vuex';
import type { State } from '../types/store';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const store = createStore<State>({
  state: {
    funcName: '',
    funContext: '',
  },
  mutations,
  getters,
  actions,
});

export default store;
