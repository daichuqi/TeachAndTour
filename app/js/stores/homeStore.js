// all songs, to be displayed on homepage
'use strict';

import Dispatcher from '../dispatcher/dispatcher.js';
import Constants from '../constants/constants';
import EventEmitter from 'events';
import assign from 'object-assign';

const ActionType = Constants.ActionTypes;
const CHANGE_EVENT = 'change';
const CHANGE_NAV_ACTIVE = 'nav_active';

var _header = true;
var _nav_active = 'home'

var setHeaderState = function (headerState) {
  _header = headerState;
};

var setNavState = function (NavName) {
  _nav_active = NavName;
};

let HomeStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  emitNavActive() {
    this.emit(CHANGE_NAV_ACTIVE);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  addNavActiveListener(callback) {
    this.on(CHANGE_NAV_ACTIVE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  removeNavActiveListener(callback) {
    this.removeListener(CHANGE_NAV_ACTIVE, callback);
  },
  getHeaderState(){
    return _header;
  },
  getNavState(){
    return _nav_active;
  }
})

HomeStore.dispatchToken = Dispatcher.register(function(payload) {
  switch(payload.type) {
    case ActionType.RESIZEHEADER:
      setHeaderState(payload.headerState);
      HomeStore.emitChange();
      break;

    case ActionType.NAVACTIVE:
      setNavState(payload.NavName);
      HomeStore.emitNavActive();
      break;

    default:
      break;
  }

});

export default HomeStore;
