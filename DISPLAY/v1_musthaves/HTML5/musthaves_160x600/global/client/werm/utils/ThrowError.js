var ThrowError_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Static Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	go:function(_class, _string,  warn) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var string;
        var fun;
		//------------------------------------------------------
        if (_class != undefined) {
    		if (_class.traceID != undefined) {
    			string = _class.traceID+": ";
    		} else if (_class.classID != undefined) {
    			string = _class.classID+": ";
    		} else {
				console.log(_class);
    	    	string = "";
	    	}
        }else {
			string = "";
		}
		//------------------------------------------------------
        if (_class != undefined) {
            fun = $.proxy(this.throwIt, _class);
            fun(string, _string, warn);
        } else {
            this.throwIt(string, _string, warn);
        }
        //------------------------------------------------------
	},
    //------------------------------------------------------------------------------
    throwIt:function(string, _string, warn) {
        if (warn == undefined) {
			if(window["jQuery"] == undefined) {
				 throw new Error(string+_string);
			} else {
				jQuery.error(string+_string);
			}
		}
    	if (warn) console.warn(string+_string);
    }
});
var ThrowError = new ThrowError_cls();
