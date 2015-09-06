// all songs, to be displayed on homepage
'use strict';

import Dispatcher from '../dispatcher/dispatcher.js';
import Constants from '../constants/constants';
import EventEmitter from 'events';
import assign from 'object-assign';

const ActionType = Constants.ActionTypes;
const CHANGE_EVENT = 'change';

var _header = true;

let setHeaderState = function (headerState) {
  _header = headerState;
};

let HomeStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getHeaderState(){
    return _header;
  }
})

HomeStore.dispatchToken = Dispatcher.register(function(payload) {
  switch(payload.type) {
    case ActionType.RESIZEHEADER:
      setHeaderState(payload.headerState);
      HomeStore.emitChange();
      break;

    default:
      break;
  }

});

export default HomeStore;
