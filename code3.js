gdjs.PauseCode = {};
gdjs.PauseCode.GDPausedObjects1= [];
gdjs.PauseCode.GDPausedObjects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};


gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


{

{ //Subevents
gdjs.PauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Paused"), gdjs.PauseCode.GDPausedObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDPausedObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDPausedObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.PauseCode.GDPausedObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.PauseCode.GDPausedObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDPausedObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.PauseCode.GDPausedObjects1[i].getHeight()) / 2);
}
}}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDPausedObjects1.length = 0;
gdjs.PauseCode.GDPausedObjects2.length = 0;

gdjs.PauseCode.eventsList1(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
