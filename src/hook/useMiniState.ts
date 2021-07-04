import { App, inject, InjectionKey } from 'vue';

type State = {
  funContext: string;
};

export const miniKey: InjectionKey<State> = Symbol();

export const createMiniState = (): {
  install(app: App): void;
} => {
  const state = {
    funContext: '',
  };

  return {
    install(app: App) {
      app.provide(miniKey, state);
    },
  };
};

export const useMiniState = (): State | undefined => {
  return inject(miniKey);
};
