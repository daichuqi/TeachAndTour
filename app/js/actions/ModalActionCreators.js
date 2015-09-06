import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

const ActionType = Constants.ActionTypes;
export default {

  closeLoginModal(){
    Dispatcher.dispatch({
      type: ActionType.CLOSE_LOGIN_MODAL,
    });
  }

}
