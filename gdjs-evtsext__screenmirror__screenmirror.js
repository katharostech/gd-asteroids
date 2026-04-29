
gdjs.evtsExt__ScreenMirror__ScreenMirror = gdjs.evtsExt__ScreenMirror__ScreenMirror || {};

/**
 * Behavior generated from Screen Mirror
 */
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror = class ScreenMirror extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < -((gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth())) ) {
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()) ) {
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(-((gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()) ) {
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(-((gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() < -((gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth())) ) {
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()));
}
}}

}


};

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("ScreenMirror::ScreenMirror", gdjs.evtsExt__ScreenMirror__ScreenMirror.ScreenMirror);
