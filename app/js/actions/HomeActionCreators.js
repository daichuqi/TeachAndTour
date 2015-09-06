import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

const ActionType = Constants.ActionTypes;
export default {

  resizeHeader(headerState){
    Dispatcher.dispatch({
      type: ActionType.RESIZEHEADER,
      headerState:headerState
    });
  }

}
