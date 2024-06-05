//300x600
var project = Project_Base.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //Number
	  //---------------------------------------------------------
	  width:undefined,
	  height:undefined,
	  firstLoad:true,
	  //---------------------------------------------------------
	  //---------------------------------------------------------
	  //Boolean
	  //---------------------------------------------------------
	  callStart:true,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  traceID:undefined,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  data:undefined,
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  init:function(obj, init_preStart) {
		  this._super(obj, false);
		  this.data = {};
	  },
	  //------------------------------------------------------------------------------------- 
	  div_CFG:function() {
		  this._super();
		  
	  },
	  //------------------------------------------------------------------------------------- 
	  visibility_CFG:function() {
		//--------------------------------------
	  	$elm = this.$div;
		TweenLite.set($elm, { borderTopColor:"#bbbbbb", borderRightColor:"#bbbbbb", borderBottomColor:"#bbbbbb", borderLeftColor:"#bbbbbb"});
		//--------------------------------------
		$elm = this.$div.find(".bg");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
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
		var delay = .1;
    	var state = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$div.find(".txt_0");
		TweenLite.set($elm, {opacity:1});		
		//--------------------------------------
		$elm = this.$div.find(".text_1");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".bottom");
		TweenLite.set($elm, {opacity:1});		
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.black");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.black #shell");
		TweenLite.set($elm, {opacity:1, scale:.80, x:22, y:551});
		//--------------------------------------	
		delay += .2;
		$elm = this.$div.find(".item_0");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		delay += 2.5;
	    TweenLite.delayedCall(delay, $.proxy(this.step_1, this)); 
		},
		//------------------------------------------------------------------------------------- 
		step_1:function() {
	  	//--------------------------------------
		//Remove 1st Frame
		var delay = .1;
		//--------------------------------------
		$elm = this.$div.find(".item_1");
	    TweenLite.set($elm, {opacity:1, scale:1});
		//TweenLite.set($elm, {transformPerspective:500, transformOrigin: "0% -100%", transformStyle:"preserve-3d"});
		TweenLite.from($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
		//--------------------------------------
		$elm = this.$div.find(".text_1");
	    TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.to($elm, 1, {delay:delay,  color: 0xffffff,  ease:Quad.easeInOut});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.black");
		TweenLite.set($elm, {opacity:1});
		TweenLite.to($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.white");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.white #shell");
		TweenLite.set($elm, {opacity:1, scale:.80, x:22, y:551});
		TweenLite.from($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
		//--------------------------------------
		delay += .1
		TweenLite.delayedCall(delay, $.proxy(function() {
			this.$div.find(".cta .cta_shell p").addClass("change");
		}, this));
	
		//--------------------------------------
		delay += 4.5;
		TweenLite.delayedCall(delay, $.proxy(this.step_2, this));
		},
		//------------------------------------------------------------------------------------- 
		step_2:function() {
	  	//--------------------------------------
		//Remove 1st Frame
		var delay = .1;
		//--------------------------------------
		delay += 0.3;
		$elm = this.$div.find(".item_2");
	    TweenLite.set($elm, {opacity:1, scale:1});
		//TweenLite.set($elm, {transformPerspective:500, transformOrigin: "0% -100%", transformStyle:"preserve-3d"});
		TweenLite.from($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
		//--------------------------------------
		$elm = this.$div.find(".text_1");
	    TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.to($elm, 1, {delay:delay,  color: 0x000,  ease:Quad.easeInOut});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.white");
		TweenLite.set($elm, {opacity:1});
		TweenLite.to($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.black");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		delay += 0;
		$elm = this.$div.find(".Macys_svg.black #shell");
		TweenLite.set($elm, {opacity:1, scale:.80, x:22, y:551});
		TweenLite.from($elm, 1, {delay:delay,  opacity:0,  ease:Quad.easeInOut});
	
		//--------------------------------------
		delay += .2
		TweenLite.delayedCall(delay, $.proxy(function() {
			this.$div.find(".cta .cta_shell p").addClass("change2"); 
		}, this));
		//--------------------------------------
	  },
	 	//-------------------------------------------------------------------------------------
	  mouseover:function(e) {
	}
});