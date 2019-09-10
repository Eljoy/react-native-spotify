import { ActionType, StateType } from 'typesafe-actions';

declare namespace AppTypes {
  export type RootState = StateType<
    ReturnType<typeof import('./rootReducer').default>
  >;
  export type RootAction = ActionType<typeof import('./rootAction').default>;
}
