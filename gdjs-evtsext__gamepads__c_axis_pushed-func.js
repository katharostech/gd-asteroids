
if (typeof gdjs.evtsExt__Gamepads__C_Axis_pushed !== "undefined") {
  gdjs.evtsExt__Gamepads__C_Axis_pushed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_Axis_pushed = {};

gdjs.evtsExt__Gamepads__C_Axis_pushed.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Axis_pushed.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Axis_pushed.userFunc0xa7f670 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

var gamepad = gamepads[eventsFunctionContext.getArgument("player_ID") - 1];
if (gamepad == null) return;


var getNormalizedAxisValue = function (v) {
    gdjs._extensionController = gdjs._extensionController || { deadzone: 0.2 };

    // Anything smaller than this is assumed to be 0,0
    var DEADZONE = gdjs._extensionController.deadzone;

    if (Math.abs(v) < DEADZONE) {
        // In the dead zone, set to 0
        v = 0;

        if (v == null) {
            return 0;
        } else {
            return v;
        }

    } else {
        // We're outside the dead zone, but we'd like to smooth
        // this value out so it still runs nicely between 0..1.
        // That is, we don't want it to jump suddenly from 0 to
        // DEADZONE.

        // Remap v from
        //    DEADZONE..1 to 0..(1-DEADZONE)
        // or from
        //    -1..-DEADZONE to -(1-DEADZONE)..0

        v = v - Math.sign(v) * DEADZONE;

        // Remap v from
        //    0..(1-DEADZONE) to 0..1
        // or from
        //    -(1-DEADZONE)..0 to -1..0

        return v / (1 - DEADZONE);
    }
};

var stick = eventsFunctionContext.getArgument("stick").toUpperCase();
var direction = eventsFunctionContext.getArgument("direction").toUpperCase();
var axis;

switch (stick) {
    case 'LEFT':
        switch (direction) {
            case 'LEFT':

                if (getNormalizedAxisValue(gamepad.axes[0]) < 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'RIGHT':
                if (getNormalizedAxisValue(gamepad.axes[0]) > 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'UP':
                if (getNormalizedAxisValue(gamepad.axes[1]) < 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'DOWN':
                if (getNormalizedAxisValue(gamepad.axes[1]) > 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            default:
                break;
        }
        break;

    case 'RIGHT':
        switch (direction) {
            case 'LEFT':
                if (getNormalizedAxisValue(gamepad.axes[2]) < 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'RIGHT':
                if (getNormalizedAxisValue(gamepad.axes[2]) > 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'UP':
                if (getNormalizedAxisValue(gamepad.axes[3]) < 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            case 'DOWN':
                if (getNormalizedAxisValue(gamepad.axes[3]) > 0) {
                    eventsFunctionContext.returnValue = true;
                }
                break;

            default:
                break;
        }
        break;

    default:
        break;
}

if (eventsFunctionContext.returnValue !== true) {
    eventsFunctionContext.returnValue = false;
}
};
gdjs.evtsExt__Gamepads__C_Axis_pushed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Axis_pushed.userFunc0xa7f670(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Axis_pushed.func = function(runtimeScene, player_ID, stick, direction, parentEventsFunctionContext) {
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
if (argName === "stick") return stick;
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Axis_pushed.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_Axis_pushed.registeredGdjsCallbacks = [];