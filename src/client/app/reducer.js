import { combineReducers } from 'redux';
import { home } from '../home/reducer';
import pages from '../pageReducer';

export const appReducers = combineReducers({
  home,
  pages,
});

export default appReducers;
