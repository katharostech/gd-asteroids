
gdjs.evtsExt__Behaviors__Lifetime = gdjs.evtsExt__Behaviors__Lifetime || {};

/**
 * Behavior generated from Lifetime
 */
gdjs.evtsExt__Behaviors__Lifetime.Lifetime = class Lifetime extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Lifetime = behaviorData.Lifetime !== undefined ? behaviorData.Lifetime : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Lifetime !== newBehaviorData.Lifetime)
      this._behaviorData.Lifetime = newBehaviorData.Lifetime;

    return true;
  }

  // Properties:
  
  _getLifetime() {
    return this._behaviorData.Lifetime !== undefined ? this._behaviorData.Lifetime : Number("1") || 0;
  }
  _setLifetime(newValue) {
    this._behaviorData.Lifetime = newValue;
  }
}

// Methods:
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("lifetime_lifetimer", (gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLifetime())) ) {
        gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext = {};
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("lifetime_lifetimer");
}
}}

}


};

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Behaviors__Lifetime.Lifetime.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("Behaviors::Lifetime", gdjs.evtsExt__Behaviors__Lifetime.Lifetime);
