import { setupReduxed, ReduxedSetupOptions } from "reduxed-chrome-storage";
import { configureStore } from "@reduxjs/toolkit";
import testStore from "./testStore";
// import loggerMiddleware from "./loggerMiddleware";

const options: ReduxedSetupOptions = {
  storageKey: 'test-key',
};

const storeCreatorContainer = (preloadedState: any) =>
  configureStore({
    reducer: testStore.reducer,
    // uncomment if you want a log for every dispatched action
    // middleware(getDefaultMiddleware) {
    //   return getDefaultMiddleware().concat(loggerMiddleware);
    // },
  });

export const instantiateStore = setupReduxed(storeCreatorContainer, options);
