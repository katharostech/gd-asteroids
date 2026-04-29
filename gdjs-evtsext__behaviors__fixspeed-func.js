
if (typeof gdjs.evtsExt__Behaviors__FixSpeed !== "undefined") {
  gdjs.evtsExt__Behaviors__FixSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Behaviors__FixSpeed = {};
gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1= [];
gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects2= [];

gdjs.evtsExt__Behaviors__FixSpeed.conditionTrue_0 = {val:false};
gdjs.evtsExt__Behaviors__FixSpeed.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Behaviors__FixSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setLinearVelocityX((gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getVariables().get("length"))) / Math.max(Math.sqrt((gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) * (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) + (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY()) * (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY())), 0.001));
}
}{for(var i = 0, len = gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setLinearVelocityY((gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getVariables().get("length"))) / Math.max(Math.sqrt((gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) * (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) + (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY()) * (gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY())), 0.001));
}
}}

}


};

gdjs.evtsExt__Behaviors__FixSpeed.func = function(runtimeScene, Object, Physics2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Physics2": Physics2
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects1.length = 0;
gdjs.evtsExt__Behaviors__FixSpeed.GDObjectObjects2.length = 0;

gdjs.evtsExt__Behaviors__FixSpeed.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Behaviors__FixSpeed.registeredGdjsCallbacks = [];