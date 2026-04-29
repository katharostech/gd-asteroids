gdjs.menuCode = {};
gdjs.menuCode.GDcoopObjects1= [];
gdjs.menuCode.GDcoopObjects2= [];
gdjs.menuCode.GDcoopObjects3= [];
gdjs.menuCode.GDbuttonObjects1= [];
gdjs.menuCode.GDbuttonObjects2= [];
gdjs.menuCode.GDbuttonObjects3= [];
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDtitleObjects3= [];
gdjs.menuCode.GDLeftArrowObjects1= [];
gdjs.menuCode.GDLeftArrowObjects2= [];
gdjs.menuCode.GDLeftArrowObjects3= [];
gdjs.menuCode.GDRightArrowObjects1= [];
gdjs.menuCode.GDRightArrowObjects2= [];
gdjs.menuCode.GDRightArrowObjects3= [];
gdjs.menuCode.GDLivesNumberObjects1= [];
gdjs.menuCode.GDLivesNumberObjects2= [];
gdjs.menuCode.GDLivesNumberObjects3= [];
gdjs.menuCode.GDLivesObjects1= [];
gdjs.menuCode.GDLivesObjects2= [];
gdjs.menuCode.GDLivesObjects3= [];
gdjs.menuCode.GDLivesIconObjects1= [];
gdjs.menuCode.GDLivesIconObjects2= [];
gdjs.menuCode.GDLivesIconObjects3= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};
gdjs.menuCode.condition3IsTrue_0 = {val:false};
gdjs.menuCode.conditionTrue_1 = {val:false};
gdjs.menuCode.condition0IsTrue_1 = {val:false};
gdjs.menuCode.condition1IsTrue_1 = {val:false};
gdjs.menuCode.condition2IsTrue_1 = {val:false};
gdjs.menuCode.condition3IsTrue_1 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.menuCode.GDtitleObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects = Hashtable.newFrom({"coop": gdjs.menuCode.GDcoopObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesObjects1Objects = Hashtable.newFrom({"Lives": gdjs.menuCode.GDLivesObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.menuCode.GDRightArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects = Hashtable.newFrom({"LeftArrow": gdjs.menuCode.GDLeftArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesIconObjects1Objects = Hashtable.newFrom({"LivesIcon": gdjs.menuCode.GDLivesIconObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesNumberObjects1Objects = Hashtable.newFrom({"LivesNumber": gdjs.menuCode.GDLivesNumberObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects = Hashtable.newFrom({"LeftArrow": gdjs.menuCode.GDLeftArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects = Hashtable.newFrom({"LeftArrow": gdjs.menuCode.GDLeftArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.menuCode.GDRightArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects = Hashtable.newFrom({"RightArrow": gdjs.menuCode.GDRightArrowObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects = Hashtable.newFrom({"coop": gdjs.menuCode.GDcoopObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects = Hashtable.newFrom({"coop": gdjs.menuCode.GDcoopObjects1});gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.menuCode.GDcoopObjects1, gdjs.menuCode.GDcoopObjects2);

{for(var i = 0, len = gdjs.menuCode.GDcoopObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects2[i].setColor("255;255;255");
}
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDcoopObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcoopObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects1[i].setColor("0;122;255");
}
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.menuCode.GDLeftArrowObjects2});gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) < 1;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(9);
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects2Objects = Hashtable.newFrom({"RightArrow": gdjs.menuCode.GDRightArrowObjects2});gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) > 9;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects2});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects = Hashtable.newFrom({"coop": gdjs.menuCode.GDcoopObjects1});gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}{runtimeScene.getVariables().get("wowtheresnoelse").setNumber(1);
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("wowtheresnoelse")) == 0;
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


{


{
{runtimeScene.getVariables().get("wowtheresnoelse").setNumber(0);
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.menuCode.GDLeftArrowObjects2);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects2Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).sub(1);
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.menuCode.GDRightArrowObjects2);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects2Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).add(1);
}
{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects2);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.menuCode.GDLeftArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.menuCode.GDLivesObjects2);
gdjs.copyArray(runtimeScene.getObjects("LivesIcon"), gdjs.menuCode.GDLivesIconObjects2);
gdjs.copyArray(runtimeScene.getObjects("LivesNumber"), gdjs.menuCode.GDLivesNumberObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.menuCode.GDRightArrowObjects2);
/* Reuse gdjs.menuCode.GDbuttonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects2);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.menuCode.GDtitleObjects2);
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDtitleObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDtitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDcoopObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesNumberObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDLivesNumberObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDLivesObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesIconObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDLivesIconObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDLeftArrowObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDLeftArrowObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDRightArrowObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDRightArrowObjects2[i].getBehavior("Tween").addObjectOpacityTween("fade", 0, "linear", 1500, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDcoopObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcoopObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects1[i].setColor("0;122;255");
}
}
{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.menuCode.GDbuttonObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.menuCode.GDtitleObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects = Hashtable.newFrom({"coop": gdjs.menuCode.GDcoopObjects1});gdjs.menuCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.menuCode.GDLeftArrowObjects1.length = 0;

gdjs.menuCode.GDLivesObjects1.length = 0;

gdjs.menuCode.GDLivesIconObjects1.length = 0;

gdjs.menuCode.GDLivesNumberObjects1.length = 0;

gdjs.menuCode.GDRightArrowObjects1.length = 0;

gdjs.menuCode.GDbuttonObjects1.length = 0;

gdjs.menuCode.GDcoopObjects1.length = 0;

gdjs.menuCode.GDtitleObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X").setNumber(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y").setNumber(gdjs.evtTools.window.getWindowInnerHeight() / 2);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDtitleObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesIconObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.menuCode.GDLivesIconObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLivesIconObjects1[i].setScale(0.8);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLivesNumberObjects1Objects, 0, 0, "Layer2");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.menuCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.menuCode.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesIcon"), gdjs.menuCode.GDLivesIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesNumber"), gdjs.menuCode.GDLivesNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.menuCode.GDRightArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.menuCode.GDtitleObjects1);
{for(var i = 0, len = gdjs.menuCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtitleObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.menuCode.GDtitleObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 3);
}
}{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.menuCode.GDbuttonObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 2);
}
}{for(var i = 0, len = gdjs.menuCode.GDcoopObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((gdjs.menuCode.GDcoopObjects1[i].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()));
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLivesObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((( gdjs.menuCode.GDcoopObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDcoopObjects1[0].getWidth()) / 2),gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()) * 3);
}
}{for(var i = 0, len = gdjs.menuCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDRightArrowObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2 + (( gdjs.menuCode.GDLivesIconObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDLivesIconObjects1[0].getWidth())) - (gdjs.menuCode.GDRightArrowObjects1[i].getWidth()),gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()) * 5);
}
}{for(var i = 0, len = gdjs.menuCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLeftArrowObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() / 2) - ((( gdjs.menuCode.GDLivesIconObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDLivesIconObjects1[0].getWidth())),gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()) * 5);
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesIconObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLivesIconObjects1[i].setPosition(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.menuCode.GDLivesIconObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()) * 5 - (gdjs.menuCode.GDLivesIconObjects1[i].getHeight()) / 4);
}
}{for(var i = 0, len = gdjs.menuCode.GDLivesNumberObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLivesNumberObjects1[i].setPosition(((gdjs.evtTools.window.getWindowInnerWidth() / 2 - (( gdjs.menuCode.GDLivesIconObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDLivesIconObjects1[0].getWidth()) / 2) + (( gdjs.menuCode.GDLivesIconObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDLivesIconObjects1[0].getWidth()) / 2) - (gdjs.menuCode.GDLivesNumberObjects1[i].getWidth()) / 2,(gdjs.evtTools.window.getWindowInnerHeight() / 2 + (( gdjs.menuCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDbuttonObjects1[0].getHeight()) * 5 - (( gdjs.menuCode.GDLivesIconObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDLivesIconObjects1[0].getHeight()) / 4) + (gdjs.menuCode.GDLivesNumberObjects1[i].getHeight()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LivesNumber"), gdjs.menuCode.GDLivesNumberObjects1);
{for(var i = 0, len = gdjs.menuCode.GDLivesNumberObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLivesNumberObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11064220);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11065276);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbuttonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.menuCode.GDLeftArrowObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11066164);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDLeftArrowObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLeftArrowObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.menuCode.GDLeftArrowObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLeftArrowObjects1Objects, runtimeScene, true, true);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11067052);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDLeftArrowObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDLeftArrowObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.menuCode.GDRightArrowObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects, runtimeScene, true, true);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11068020);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDRightArrowObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDRightArrowObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.menuCode.GDRightArrowObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDRightArrowObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11068908);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDRightArrowObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDRightArrowObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11069796);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDcoopObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcoopObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcoopObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects, runtimeScene, true, true);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11070684);
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.menuCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("coop"), gdjs.menuCode.GDcoopObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.menuCode.GDtitleObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition0IsTrue_0;
gdjs.menuCode.condition0IsTrue_1.val = false;
gdjs.menuCode.condition1IsTrue_1.val = false;
gdjs.menuCode.condition2IsTrue_1.val = false;
{
gdjs.menuCode.condition0IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbuttonObjects1Objects) == 0;
}if ( gdjs.menuCode.condition0IsTrue_1.val ) {
{
gdjs.menuCode.condition1IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDtitleObjects1Objects) == 0;
}if ( gdjs.menuCode.condition1IsTrue_1.val ) {
{
gdjs.menuCode.condition2IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDcoopObjects1Objects) == 0;
}}
}
gdjs.menuCode.conditionTrue_1.val = true && gdjs.menuCode.condition0IsTrue_1.val && gdjs.menuCode.condition1IsTrue_1.val && gdjs.menuCode.condition2IsTrue_1.val;
}
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "asteroids", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDcoopObjects1.length = 0;
gdjs.menuCode.GDcoopObjects2.length = 0;
gdjs.menuCode.GDcoopObjects3.length = 0;
gdjs.menuCode.GDbuttonObjects1.length = 0;
gdjs.menuCode.GDbuttonObjects2.length = 0;
gdjs.menuCode.GDbuttonObjects3.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDtitleObjects3.length = 0;
gdjs.menuCode.GDLeftArrowObjects1.length = 0;
gdjs.menuCode.GDLeftArrowObjects2.length = 0;
gdjs.menuCode.GDLeftArrowObjects3.length = 0;
gdjs.menuCode.GDRightArrowObjects1.length = 0;
gdjs.menuCode.GDRightArrowObjects2.length = 0;
gdjs.menuCode.GDRightArrowObjects3.length = 0;
gdjs.menuCode.GDLivesNumberObjects1.length = 0;
gdjs.menuCode.GDLivesNumberObjects2.length = 0;
gdjs.menuCode.GDLivesNumberObjects3.length = 0;
gdjs.menuCode.GDLivesObjects1.length = 0;
gdjs.menuCode.GDLivesObjects2.length = 0;
gdjs.menuCode.GDLivesObjects3.length = 0;
gdjs.menuCode.GDLivesIconObjects1.length = 0;
gdjs.menuCode.GDLivesIconObjects2.length = 0;
gdjs.menuCode.GDLivesIconObjects3.length = 0;

gdjs.menuCode.eventsList5(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
