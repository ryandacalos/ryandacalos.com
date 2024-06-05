var TweenEngine_cls = Class.extend({
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Init var
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//------------------------------------------------------------------------
	//Class
	//------------------------------------------------------------------------
	_tweenEngine:Class,
	plugins:Object,
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//General Methods
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	from:function(_master_init, _duration_init, _obj_init) {
		return (this._tweenEngine != null) ? this._tweenEngine.from.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	to:function(_master_init, _duration_init, _obj_init) {
		return (this._tweenEngine != null) ? this._tweenEngine.to.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	set:function(_master_init, _duration_init, _obj_init) {
		return (this._tweenEngine != null) ? this._tweenEngine.set.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	delayedCall:function(_delay_init, _function, params) {
		return (this._tweenEngine != null) ? this._tweenEngine.delayedCall.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	killTweensOf:function(mc) {
		return (this._tweenEngine != null) ? this._tweenEngine.killTweensOf.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	killDelayedCallsTo:function(mc) {
		return (this._tweenEngine != null) ? this._tweenEngine.killDelayedCallsTo.apply(null, arguments) : throwError("tweenEngine not activated");
	},
	//------------------------------------------------------------------------------------------------------------------
	activate:function(greensockClass) {
		this._tweenEngine = greensockClass;
		plugins = greensockClass.plugins;
		//if (greensockClass.instanceof("TweenLite" || getQualifiedClassName(greensockClass) == "com.greensock::TweenMax") {
			//plugins = greensockClass.plugins
		//}
	},
	//------------------------------------------------------------------------------------------------------------------
	isActivated:function() {
		var bool = (this._tweenEngine != null) ? true : false;
		return bool;
	},
	//------------------------------------------------------------------------------------------------------------------
	throwError:function(string) {
		throw new Error("TweenEngine: " + string);
	},
	//------------------------------------------------------------------------------------------------------------------
	pluginCHK:function(plugin, error, notify, traceID) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var bool = true;
		//------------------------------------------------------
		if (TweenEngine.plugins != null) {;
			if (TweenEngine.plugins[plugin] == undefined) {
				if (error) ThrowError.go(plugin.charAt(0).toUpperCase()+plugin.substring(1)+"Plugin must be activated!!!!!!!!");
				bool = false;
			}
		} else {
			if (error) ThrowError.go(plugin.charAt(0).toUpperCase()+plugin.substring(1)+"Plugin must be activated!!!!!!!!");
			bool = false;
		}
		//------------------------------------------------------
		if (notify && !bool) {
			plugin = '"'+plugin + '" is being utilized in one of the effects you are using but will work without it. To include plugin please activate it.';
			//if (effectID != null) plugin = '"'+plugin + '" is being used in "'+effectID+'" but will work without it. To include plugin please activate it.';
			(traceID == null) ? trace(plugin) : Trace.output(traceID, plugin);
		}
		//------------------------------------------------------
		return bool;
	}
});
var TweenEngine = new TweenEngine_cls();
