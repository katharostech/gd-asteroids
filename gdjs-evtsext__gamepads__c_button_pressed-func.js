
if (typeof gdjs.evtsExt__Gamepads__C_Button_pressed !== "undefined") {
  gdjs.evtsExt__Gamepads__C_Button_pressed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_Button_pressed = {};

gdjs.evtsExt__Gamepads__C_Button_pressed.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Button_pressed.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Button_pressed.userFunc0xa7f670 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

var playerId = eventsFunctionContext.getArgument("player_ID") - 1;
var gamepad = gamepads[playerId];

if (gamepad == null) return;

var param_button = eventsFunctionContext.getArgument("button").toUpperCase();
var btn_id;

switch (param_button) {
    case 'A':
    case 'CROSS':
        btn_id = 0;
        //console.log('A CROSS');
        break;
    case 'B':
    case 'CIRCLE':
        btn_id = 1;
        //console.log('B CIRCLE');
        break;
    case 'X':
    case 'SQUARE':
        btn_id = 2;
        //console.log('X SQUARE');
        break;
    case 'Y':
    case 'TRIANGLE':
        btn_id = 3;
        //console.log('Y TRIANGLE');
        break;
    case 'LB':
    case 'L1':
        btn_id = 4;
        //console.log('LB L1');
        break;
    case 'RB':
    case 'R1':
        btn_id = 5;
        //console.log('RB R1');
        break;
    case 'LT':
    case 'L2':
        btn_id = 6;
        //console.log('LT L2');
        break;
    case 'RT':
    case 'R2':
        btn_id = 7;
        //console.log('RT R2');
        break;

    case 'UP':
        btn_id = 12;
        //console.log('UP');
        break;
    case 'DOWN':
        btn_id = 13;
        //console.log('DOWN');
        break;
    case 'LEFT':
        btn_id = 14;
        //console.log('LEFT');
        break;
    case 'RIGHT':
        btn_id = 15;
        //console.log('RIGHT');
        break;

    case 'BACK':
    case 'SHARE':
        btn_id = 8;
        //console.log('BACK SHARE');
        break;
    case 'START':
    case 'OPTIONS':
        btn_id = 9;
        //console.log('START OPTIONS');
        break;

    case 'CLICK_STICK_LEFT':
        btn_id = 10;
        //console.log('CLICK_STICK_LEFT');
        break;
    case 'CLICK_STICK_RIGHT':
        btn_id = 11;
        //console.log('CLICK_STICK_RIGHT');
        break;

    //PS4
    case 'PS_BUTTON':
        btn_id = 16;
        //console.log('PS_BUTTON');
        break;
    case 'CLICK_TOUCHPAD':
        btn_id = 17;
        //console.log('CLICK_TOUCHPAD');
        break;

    default:
        //console.log('null btn');
        break;
}

if (!gamepad.buttons[btn_id]) {
    return;
}

gdjs._extensionController = gdjs._extensionController || { deadzone: 0.2 };
gdjs._extensionController.players = gdjs._extensionController.players || {};
gdjs._extensionController.players[playerId] = gdjs._extensionController.players[playerId] || { lastButtonUsed: -1 };

if (gamepad.buttons[btn_id].pressed) {
    gdjs._extensionController.players[playerId].lastButtonUsed = btn_id;
    eventsFunctionContext.returnValue = true;
} else {
    eventsFunctionContext.returnValue = false;
}

};
gdjs.evtsExt__Gamepads__C_Button_pressed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Button_pressed.userFunc0xa7f670(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Button_pressed.func = function(runtimeScene, player_ID, button, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "player_ID") return player_ID;
if (argName === "button") return button;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Button_pressed.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_Button_pressed.registeredGdjsCallbacks = [];