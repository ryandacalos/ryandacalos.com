var Mens_728x90_DressFurnLauren1015 = Project_Base.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //$elm
	  //---------------------------------------------------------
	  $items:undefined,
	  //---------------------------------------------------------
	  //Boolean
	  //---------------------------------------------------------
	  callStart:true,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  traceID:"Mens_160x600_DressFurnLauren1015",
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	 init:function(obj, init_preStart) {
		  this._super(obj, false);
	  },
	  //------------------------------------------------------------------------------------- 
	  div_CFG:function() {
		  this._super();
		  this.$items = this.$div.children(".items");
		  this.$cta = this.$div.find(".cta");
		  this.$cta_txt = this.$div.find(".cta_txt");
		  this.$div.mouseenter($.proxy(this.mouseover, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  visibility_CFG:function() {
		  TweenLite.set(this.$items, {opacity:1});
		  TweenLite.set(this.$items.children(), {opacity:0});
		  //--------------------------------------	
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  mouseover:function(e) {
		  //----------------------------------------------------
		  //init
		  //----------------------------------------------------
		  var delay = 0;
		  var $elm;
		  //----------------------------------------------------
		  this.mouseover = true;
		  if (!this.active) {
			  this.active = true;
			  //----------------------------------------------------
			  $elm = this.$cta_txt;
			  TweenEngine.to($elm, .2, {y:"+50", ease:Expo.easeIn});
			  //----------------------------------------------------
			  delay += .2;
			  TweenEngine.delayedCall(delay, $.proxy(this.mouseover_complete, this));
		  }
	  },
	  //-------------------------------------------------------------------------------------
	  mouseover_complete:function(e) {
		  //----------------------------------------------------
		  //init
		  //----------------------------------------------------
		  var $elm;
		  var delay = 0;
		  //----------------------------------------------------
		  $elm = this.$cta_txt;
		  TweenEngine.set($elm, {y:-50});
		  TweenEngine.to($elm, .2, {y:0, ease:Back.easeOut, onComplete:$.proxy(function() {this.active = false;}, this)});
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	   step_0:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = .3;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$items.children(".item_0");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, .5, {delay:delay, opacity:0, ease:Linear.easeOut});
		TweenLite.to($elm, 7, {delay:delay, y:-170, ease:Linear.easeOut});
		//TweenLite.from($elm, 1, {delay:delay, y:"300", ease:Expo.easeInOut});
		//--------------------------------------
		delay += 7.6;
		TweenLite.delayedCall(delay, $.proxy(this.step_1, this))
	  },
	  //------------------------------------------------------------------------------------- 
	 step_1:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $el
		//--------------------------------------
		$elm = this.$items.children(".item_0");
		TweenLite.to($elm, 1, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		$elm = this.$div.find(".item_1");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Expo.easeOut});
		//--------------------------------------
		delay += .4;
		$elm = this.$div.find(".oos_0");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 1.5, {delay:delay, opacity:0, y:-100, ease:Expo.easeOut});
		//--------------------------------------
		delay += .6	;
		$elm = this.$div.find(".oos_1");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0,  ease:Quad.easeOut});
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".logo_0");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, scale:1.4, ease:Expo.easeOut});
		
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".item_2");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Quad.easeOut});
		//------------------------------------
		delay += .1;
		$elm = this.$div.find(".item_3");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".item_4");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".item_5");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".logo_1");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2.5, {delay:delay, opacity:0, ease:Expo.easeOut});
		//--------------------------------------
		delay += .2;
		$elm = this.$cta;
		TweenEngine.set(this.$div.find(".cta"), {opacity:1});
		TweenEngine.from($elm, 2, {delay:delay, opacity:0, ease:Quad.easeOut});
		//-------------------------------------------------------------------------------------
	  },
	 
	  //-------------------------------------------------------------------------------------
        mouseover:function(e) {
		}
	  //------------------------------------------------------------------------------------- 
});