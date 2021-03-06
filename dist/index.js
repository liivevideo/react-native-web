require('./modules/injectResponderEventPlugin');

var _findNodeHandle=require('./modules/findNodeHandle/index');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _server=require('react-dom/server');var _server2=_interopRequireDefault(_server);


var _Animated=require('./apis/Animated/index');var _Animated2=_interopRequireDefault(_Animated);
var _AppRegistry=require('./apis/AppRegistry/index');var _AppRegistry2=_interopRequireDefault(_AppRegistry);
var _AppState=require('./apis/AppState/index');var _AppState2=_interopRequireDefault(_AppState);
var _AsyncStorage=require('./apis/AsyncStorage/index');var _AsyncStorage2=_interopRequireDefault(_AsyncStorage);
var _Dimensions=require('./apis/Dimensions/index');var _Dimensions2=_interopRequireDefault(_Dimensions);
var _Easing=require('animated/lib/Easing');var _Easing2=_interopRequireDefault(_Easing);
var _I18nManager=require('./apis/I18nManager/index');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _InteractionManager=require('./apis/InteractionManager/index');var _InteractionManager2=_interopRequireDefault(_InteractionManager);
var _NetInfo=require('./apis/NetInfo/index');var _NetInfo2=_interopRequireDefault(_NetInfo);
var _PanResponder=require('./apis/PanResponder/index');var _PanResponder2=_interopRequireDefault(_PanResponder);
var _PixelRatio=require('./apis/PixelRatio/index');var _PixelRatio2=_interopRequireDefault(_PixelRatio);
var _Platform=require('./apis/Platform/index');var _Platform2=_interopRequireDefault(_Platform);
var _StyleSheet=require('./apis/StyleSheet/index');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _UIManager=require('./apis/UIManager/index');var _UIManager2=_interopRequireDefault(_UIManager);
var _Vibration=require('./apis/Vibration/index');var _Vibration2=_interopRequireDefault(_Vibration);


var _ActivityIndicator=require('./components/ActivityIndicator/index');var _ActivityIndicator2=_interopRequireDefault(_ActivityIndicator);
var _Image=require('./components/Image/index');var _Image2=_interopRequireDefault(_Image);
var _ListView=require('./components/ListView/index');var _ListView2=_interopRequireDefault(_ListView);
var _ScrollView=require('./components/ScrollView/index');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _Switch=require('./components/Switch/index');var _Switch2=_interopRequireDefault(_Switch);
var _Text=require('./components/Text/index');var _Text2=_interopRequireDefault(_Text);
var _TextInput=require('./components/TextInput/index');var _TextInput2=_interopRequireDefault(_TextInput);
var _Touchable=require('./components/Touchable/Touchable');var _Touchable2=_interopRequireDefault(_Touchable);
var _TouchableBounce=require('./components/Touchable/TouchableBounce');var _TouchableBounce2=_interopRequireDefault(_TouchableBounce);
var _TouchableHighlight=require('./components/Touchable/TouchableHighlight');var _TouchableHighlight2=_interopRequireDefault(_TouchableHighlight);
var _TouchableOpacity=require('./components/Touchable/TouchableOpacity');var _TouchableOpacity2=_interopRequireDefault(_TouchableOpacity);
var _TouchableWithoutFeedback=require('./components/Touchable/TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);
var _View=require('./components/View/index');var _View2=_interopRequireDefault(_View);


var _NativeModules=require('./modules/NativeModules/index');var _NativeModules2=_interopRequireDefault(_NativeModules);
var _createDOMElement=require('./modules/createDOMElement/index');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _applyNativeMethods=require('./modules/applyNativeMethods/index');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);



var _ColorPropType=require('./propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _EdgeInsetsPropType=require('./propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _PointPropType=require('./propTypes/PointPropType');var _PointPropType2=_interopRequireDefault(_PointPropType);
var _StyleSheetPropType=require('./propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _BaseComponentPropTypes=require('./propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// modules
// APIs
var ReactNative={
// top-level API
findNodeHandle:_findNodeHandle2.default,
render:_reactDom2.default.render,
unmountComponentAtNode:_reactDom2.default.unmountComponentAtNode,
// web-only
renderToStaticMarkup:_server2.default.renderToStaticMarkup,
renderToString:_server2.default.renderToString,

// APIs
Animated:_Animated2.default,
AppRegistry:_AppRegistry2.default,
AppState:_AppState2.default,
AsyncStorage:_AsyncStorage2.default,
Dimensions:_Dimensions2.default,
Easing:_Easing2.default,
I18nManager:_I18nManager2.default,
InteractionManager:_InteractionManager2.default,
NetInfo:_NetInfo2.default,
PanResponder:_PanResponder2.default,
PixelRatio:_PixelRatio2.default,
Platform:_Platform2.default,
StyleSheet:_StyleSheet2.default,
UIManager:_UIManager2.default,
Vibration:_Vibration2.default,

// components
ActivityIndicator:_ActivityIndicator2.default,
Image:_Image2.default,
ListView:_ListView2.default,
ScrollView:_ScrollView2.default,
Switch:_Switch2.default,
Text:_Text2.default,
TextInput:_TextInput2.default,
Touchable:_Touchable2.default,
TouchableBounce:_TouchableBounce2.default,
TouchableHighlight:_TouchableHighlight2.default,
TouchableOpacity:_TouchableOpacity2.default,
TouchableWithoutFeedback:_TouchableWithoutFeedback2.default,
View:_View2.default,

// modules
NativeModules:_NativeModules2.default,

createDOMElement:_createDOMElement2.default,
applyNativeMethods:_applyNativeMethods2.default,

// propTypes
ColorPropType:_ColorPropType2.default,
EdgeInsetsPropType:_EdgeInsetsPropType2.default,
PointPropType:_PointPropType2.default,

StyleSheetPropType:_StyleSheetPropType2.default,
BaseComponentPropTypes:_BaseComponentPropTypes2.default};// propTypes
// components

module.exports=ReactNative;