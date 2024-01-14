import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import teamReducer from '../feature/TeamSlice';
import modalReducer from '../feature/ModalSlice';
import termReducer from '../feature/TermSlice';
import authReducer from '../feature/authSlice';
import teamfilterReducer from '../feature/teamFilterSlice';
import selecteditemReducer from '../feature/SelectedItemsSlice';
import accompanyReducer from '@/feature/fetchSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import SummaryReducer from '@/feature/SummarySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'team',
    'modal',
    'term',
    'auth',
    'teamfilter',
    'selecteditem',
    'summary',
    'accompany',
  ],
};

const rootReducer = combineReducers({
  team: teamReducer,
  modal: modalReducer,
  term: termReducer,
  auth: authReducer,
  teamfilter: teamfilterReducer,
  selecteditem: selecteditemReducer,
  summary: SummaryReducer,
  accompany: accompanyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ReducerType = ReturnType<typeof rootReducer>;
