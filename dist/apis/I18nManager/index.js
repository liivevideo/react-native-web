var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var _ExecutionEnvironment2=_interopRequireDefault(_ExecutionEnvironment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}








var isPreferredLanguageRTL=false;
var isRTLAllowed=true;
var isRTLForced=false;

var isRTL=function isRTL(){
if(isRTLForced){
return true;
}
return isRTLAllowed&&isPreferredLanguageRTL;
};

var onChange=function onChange(){
if(_ExecutionEnvironment2.default.canUseDOM){
document.documentElement.setAttribute('dir',isRTL()?'rtl':'ltr');
}
};

var I18nManager={
allowRTL:function allowRTL(bool){
isRTLAllowed=bool;
onChange();
},
forceRTL:function forceRTL(bool){
isRTLForced=bool;
onChange();
},
setPreferredLanguageRTL:function setPreferredLanguageRTL(bool){
isPreferredLanguageRTL=bool;
onChange();
},
get isRTL(){
return isRTL();
}};


module.exports=I18nManager;