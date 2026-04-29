gdjs.game_95overCode = {};
gdjs.game_95overCode.GDgameoverObjects1= [];
gdjs.game_95overCode.GDgameoverObjects2= [];
gdjs.game_95overCode.GDgameoverObjects3= [];
gdjs.game_95overCode.GDmenuObjects1= [];
gdjs.game_95overCode.GDmenuObjects2= [];
gdjs.game_95overCode.GDmenuObjects3= [];
gdjs.game_95overCode.GDrestartObjects1= [];
gdjs.game_95overCode.GDrestartObjects2= [];
gdjs.game_95overCode.GDrestartObjects3= [];

gdjs.game_95overCode.conditionTrue_0 = {val:false};
gdjs.game_95overCode.condition0IsTrue_0 = {val:false};
gdjs.game_95overCode.condition1IsTrue_0 = {val:false};
gdjs.game_95overCode.condition2IsTrue_0 = {val:false};
gdjs.game_95overCode.conditionTrue_1 = {val:false};
gdjs.game_95overCode.condition0IsTrue_1 = {val:false};
gdjs.game_95overCode.condition1IsTrue_1 = {val:false};
gdjs.game_95overCode.condition2IsTrue_1 = {val:false};


gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDgameoverObjects1Objects = Hashtable.newFrom({"gameover": gdjs.game_95overCode.GDgameoverObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.game_95overCode.GDmenuObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.game_95overCode.GDmenuObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.game_95overCode.GDmenuObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects2Objects = Hashtable.newFrom({"restart": gdjs.game_95overCode.GDrestartObjects2});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.game_95overCode.GDmenuObjects1});gdjs.game_95overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95overCode.GDrestartObjects2);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects2Objects, runtimeScene, true, false);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "asteroids", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.game_95overCode.GDmenuObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};gdjs.game_95overCode.eventsList1 = function(runtimeScene) {

{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
gdjs.game_95overCode.GDgameoverObjects1.length = 0;

gdjs.game_95overCode.GDmenuObjects1.length = 0;

gdjs.game_95overCode.GDrestartObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDgameoverObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects, 0, 0, "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("gameover"), gdjs.game_95overCode.GDgameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.game_95overCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95overCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.game_95overCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDrestartObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.game_95overCode.GDrestartObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 2);
}
}{for(var i = 0, len = gdjs.game_95overCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDmenuObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.game_95overCode.GDmenuObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 2 - (gdjs.game_95overCode.GDmenuObjects1[i].getHeight()) / 1.5 * 2);
}
}{for(var i = 0, len = gdjs.game_95overCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDgameoverObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.game_95overCode.GDgameoverObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95overCode.GDrestartObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11474116);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDrestartObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95overCode.GDrestartObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11474788);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDrestartObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.game_95overCode.GDmenuObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11475900);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDmenuObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.game_95overCode.GDmenuObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11476820);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDmenuObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_95overCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDgameoverObjects1.length = 0;
gdjs.game_95overCode.GDgameoverObjects2.length = 0;
gdjs.game_95overCode.GDgameoverObjects3.length = 0;
gdjs.game_95overCode.GDmenuObjects1.length = 0;
gdjs.game_95overCode.GDmenuObjects2.length = 0;
gdjs.game_95overCode.GDmenuObjects3.length = 0;
gdjs.game_95overCode.GDrestartObjects1.length = 0;
gdjs.game_95overCode.GDrestartObjects2.length = 0;
gdjs.game_95overCode.GDrestartObjects3.length = 0;

gdjs.game_95overCode.eventsList1(runtimeScene);
return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
