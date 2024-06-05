var Visibility_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//static methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	hide:function($elm, position, visibility) {
		//this.visibility($elm, "hidden");
		//hidden = GenFun.setDefaults(hidden, false);
		position = GenFun.setDefaults(position, false);
		//hidden = false;
		//if (!hidden) {
		if ($elm != undefined && $elm.length > 0) {
			if ($elm.data("Visibility") == undefined) $elm.data("Visibility", {});
			var $data = $elm.data("Visibility");
			if ($data.visibility != "hidden") {
				$data = $elm.data("Visibility");
				$data.visibility = "hidden";
				$data.orig_left = $elm[0].style.left;
				$data.orig_top = $elm[0].style.top;
				//-------------------------------------------------
				$elm.css({'left':"-2000px"});
				$elm.css({'top':"-2000px"});
				if (position) {
					$data.orig_position = $elm.css("position");
					$elm.css({'position':"absolute"});
					
				}
				if (visibility) $elm.css("visibility", "hidden");
				$elm.data($data);
			}
		}
		//} else {
		//	$elm.css({'visibility':"hidden"});
		//}
		//dur = GenFun.setDefaults(dur, 0);
		//(opacity) ? TweenLite.to($elm, dur,{css:{opacity:0}}) : $elm.css("visibility", "hidden");
		//$elm.css("display", "none");
		//$elm.css("visibility", "hidden")
	},
	//-----------------------------------------------------------------------------
	show:function($elm, opacity, dur) {
		if ($elm != undefined && $elm.length > 0) {
			if ($elm.data("Visibility") === undefined) $elm.data("Visibility", {});
			var $data = $elm.data("Visibility");
			//if ($elm.css('left') != '-2000px') $data.orig_left = $elm[0].style.left;
			//if ($elm.css('top') != '-2000px') $data.orig_top = $elm[0].style.top;
			if ($data.orig_left != undefined) {
				//console.log($data"orig_left"));
				/*if ($data"orig_top") != StringUtil.px($elm[0].style.top)) {
					//console.log($data"orig_top") , StringUtil.px($elm[0].style.top), Number(StringUtil.px($elm[0].style.top)));
					$data"orig_top", StringUtil.px($elm[0].style.top))
				}*/
				$elm.css({'left':$data.orig_left, 'top':$data.orig_top/*,'position':$data"orig_position")*/});
			}
			if ($data.orig_position != undefined) {
				/*if ($data"orig_top") != StringUtil.px($elm[0].style.top)) {
					//console.log($data"orig_top") , StringUtil.px($elm[0].style.top), Number(StringUtil.px($elm[0].style.top)));
					$data"orig_top", StringUtil.px($elm[0].style.top))
				}*/
				$elm.css({'position':$data.orig_position});
			}
			//dur = GenFun.setDefaults(dur, 0);
			if ($data.visibility != "visible") $data.visibility = "visible";
			$elm.css("visibility", "visible");
		}
		//$elm.css("display", "block");
		//if (opacity) TweenLite.set($elm, {css:{opacity:1}});
		//this.visibility($elm, "visible");
	},
	//-----------------------------------------------------------------------------
	isHidden:function($elm) {
		if ($elm.data("Visibility") == undefined) $elm.data("Visibility", {});
		var $data = $elm.data("Visibility");
		var bool = false;
		if ($data.visibility != "visible") bool = true;
		return bool;
	}
});
var Visibility = new Visibility_cls();
