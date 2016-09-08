Object.defineProperty(exports,"__esModule",{value:true});var CSS_UNIT_RE=/^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(\w*)/;

var getUnit=function getUnit(str){return str.match(CSS_UNIT_RE)[1];};

var isNumeric=function isNumeric(n){
return!isNaN(parseFloat(n))&&isFinite(n);
};

var multiplyStyleLengthValue=function multiplyStyleLengthValue(value,multiple){
if(typeof value==='string'){
var number=parseFloat(value,10)*multiple;
var unit=getUnit(value);
return''+number+unit;
}else if(isNumeric(value)){
return value*multiple;
}
};exports.default=

multiplyStyleLengthValue;