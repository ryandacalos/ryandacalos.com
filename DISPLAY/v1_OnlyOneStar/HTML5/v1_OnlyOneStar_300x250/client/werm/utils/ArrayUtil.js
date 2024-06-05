var ArrayUtil_stc = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	merge:function(arrObj, keepFromIndex) {
		if (keepFromIndex == undefined) keepFromIndex = 0;
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var num = 0;
		//------------------------------------------------------
		for (i in _class) {
			num ++;
		}
		//------------------------------------------------------
		return num;
	},
	//-----------------------------------------------------------------------------
	removeIfExist:function(index, arr) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var num = 0;
		//------------------------------------------------------
		for (i in arr) {
			if (arr[i] == index) {
				arr.splice(i, 1);
				break;
			}
		}
		//------------------------------------------------------
		return arr;
	},
	//-------------------------------------------------------------------------------------
	isArray:function(array){
	  return !(
		!array || 
		(!NumberUtil.isNumeric(array.length) && !array.length) || 
		typeof array !== 'object' || 
		!array.constructor || 
		array.nodeType || 
		array.item 
	  );
	}
});
var ArrayUtil = new ArrayUtil_stc();
