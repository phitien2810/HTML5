(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"_CRP_training_atlas_1", frames: [[885,0,815,1119],[0,0,883,1041]]},
		{name:"_CRP_training_atlas_2", frames: [[817,998,880,352],[666,1352,880,264],[666,1618,880,264],[0,0,815,1119],[0,1121,664,756],[817,0,875,996]]},
		{name:"_CRP_training_atlas_3", frames: [[882,0,439,420],[1323,0,439,420],[0,266,439,420],[441,266,439,420],[882,422,439,420],[1323,422,439,420],[1764,0,92,92],[1858,0,92,92],[882,844,390,390],[0,0,880,264],[0,688,439,420],[441,688,439,420]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["_CRP_training_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["_CRP_training_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["_CRP_training_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["_CRP_training_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.start_down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-78.35,-78.35,0.4018,0.4018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-78.3,156.7,156.7);


(lib.ico_arrowRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgODFICgihImxAAIAAhJIGvAAIieieIAzg2ID7D6Ij7D5g");
	this.shape.setTransform(-0.3499,-0.2309,0.7618,0.7615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ico_arrowRight, new cjs.Rectangle(-22.2,-19.2,43.8,38), null);


(lib.Polygon_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_12, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_11, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_10_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_10_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGKIjkmKIDkmJIHFAAIDkGJIjkGKg");
	this.shape.setTransform(45.45,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_10_0, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_10, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_9_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_9_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGKIjjmKIDjmJIHFAAIDjGJIjjGKg");
	this.shape.setTransform(45.425,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_9_0, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_9, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_8_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_8_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_8_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_8, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_7_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_7_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_7_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_7, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_6_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGKIjjmKIDjmJIHGAAIDkGJIjkGKg");
	this.shape.setTransform(45.45,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_6_1, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_6_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_6, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_5_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_5_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_5_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGKIjjmKIDjmJIHFAAIDjGJIjjGKg");
	this.shape.setTransform(45.425,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_5, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_4_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_4_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_4_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_4, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGKIjkmKIDkmJIHFAAIDkGJIjkGKg");
	this.shape.setTransform(45.45,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_3_2, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_3_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_3_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_3, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_2_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_2_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjjmJIDjmJIHFAAIDjGJIjjGJg");
	this.shape.setTransform(45.425,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_2_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGKIjjmKIDjmJIHFAAIDjGJIjjGKg");
	this.shape.setTransform(45.425,39.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_2, new cjs.Rectangle(0,0,90.9,78.8), null);


(lib.Polygon_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_1_2, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHFAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_1_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_1_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjjGJIjjmJIDjmJIHGAAIDkGJIjkGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_1, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon_0, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Polygon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjiGJIjkmJIDkmJIHGAAIDjGJIjjGJg");
	this.shape.setTransform(45.45,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Polygon, new cjs.Rectangle(0,0,90.9,78.7), null);


(lib.Path_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAlQgPgPAAgWQAAgUAPgPQAPgPAWgBQAQAAAOALQANAKAFAQIATAAIAAAVIgRAAQgDATgOANQgPAMgSAAQgWAAgPgOg");
	this.shape.setTransform(5.975,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,12,10.3), null);


(lib.Path_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAVAAAPAPQAQAQAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAlQgPgPAAgWQAAgUAPgPQAPgPAVgBQARAAAOALQANAKAFAQIATAAIAAAUIgRAAQgDAUgOANQgPAMgTAAQgVAAgPgOg");
	this.shape.setTransform(6,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,12,10.3), null);


(lib.Path_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgUIApAAIAAAUg");
	this.shape.setTransform(2.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZAnQgOgNgDgTIgRAAIAAgVIATAAQAFgQAOgKQANgLAQAAQAWAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgWAAQgSAAgPgNg");
	this.shape.setTransform(6,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,12,10.4), null);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgPAVgBQAVABAPAPQAQAPAAAUQAAAWgQAPQgPAOgVAAQgVAAgPgOg");
	this.shape.setTransform(5.175,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,10.4,10.3), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZAnQgOgNgDgTIgRAAIAAgVIATAAQAFgQAOgKQANgLAQAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgSAAgPgNg");
	this.shape.setTransform(6,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,12,10.4), null);


(lib.Path_30_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_30_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_1, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_30_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_0, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_29_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_29_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_29_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_0, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_28_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAUgkIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_28_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgTAKg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_27_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_27_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgTAKg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_26_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_3, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_26_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_26_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_0, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgPAVgBQAVABAPAPQAQAPAAAUQAAAWgQAPQgPAOgVAAQgVAAgPgOg");
	this.shape.setTransform(5.175,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,10.4,10.3), null);


(lib.Path_25_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_25_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_25_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_4, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_25_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_25_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_25_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_24_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgMANIAFgJIgJgQIARgLIAQAbIgMAUg");
	this.shape.setTransform(1.725,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_6, new cjs.Rectangle(0,0,3.5,4.8), null);


(lib.Path_24_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_24_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgMAOIAGgKIgKgQIARgLIAQAbIgLAUg");
	this.shape.setTransform(1.725,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_4, new cjs.Rectangle(0,0,3.5,4.8), null);


(lib.Path_24_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_24_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgQAEIAPgbIASALIgKAQIAGAKIgSAKg");
	this.shape.setTransform(1.725,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_2, new cjs.Rectangle(0,0,3.5,4.8), null);


(lib.Path_24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_24_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgQAEIAPgbIASALIgKAQIAGAKIgSAKg");
	this.shape.setTransform(1.725,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_0, new cjs.Rectangle(0,0,3.5,4.8), null);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_23_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_23_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_23_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_23_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_3, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_23_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_23_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_22_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_22_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_22_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_4, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_22_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgRALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_22_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_21_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_21_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_21_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_21_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_21_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_21_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_20_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_20_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_20_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgUAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_3, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_20_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_19_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_19_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_19_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_19_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_3, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_19_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_19_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_18_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_6, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_18_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_18_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_4, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_18_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_3, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_18_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_18_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_0, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_17_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_17_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_17_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_17_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_17_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_17_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgRAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_16_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_6, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_16_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_16_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_4, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_16_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_16_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_16_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_0, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIARgKIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_15_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_15_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_15_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_3, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIAUgiIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_15_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_14_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAVglIALAAIAAAOIAFADIgTAfg");
	this.shape.setTransform(1.875,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_6, new cjs.Rectangle(0,0,3.8,4.9), null);


(lib.Path_14_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_14_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAVglIALAAIAAAOIAFADIgTAfg");
	this.shape.setTransform(1.875,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_4, new cjs.Rectangle(0,0,3.8,4.9), null);


(lib.Path_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_3, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgHIAFgDIAAgOIALAAIAVAmIgTALg");
	this.shape.setTransform(1.875,2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_2, new cjs.Rectangle(0,0,3.8,5), null);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAjIgRAKg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_14_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgHIAFgCIAAgPIALAAIAVAmIgTAKg");
	this.shape.setTransform(1.875,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_0, new cjs.Rectangle(0,0,3.8,4.9), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_13_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_13_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAwQgPgPgBgWQABgUAPgPQAPgPAUAAQAJAAAIADIAOgaIASAKIgPAaQARAQAAAVQAAAWgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,6.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_5, new cjs.Rectangle(0,0,10.3,12.7), null);


(lib.Path_13_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_4, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_13_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAwQgPgPgBgVQABgVAPgPQAPgPAUAAQAIAAAJACIAOgZIASALIgPAZQARAPAAAXQAAAVgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_3, new cjs.Rectangle(0,0,10.3,12.6), null);


(lib.Path_13_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAwQgPgPgBgVQAAgXASgPIgPgaIASgKIAPAZQALgDAEAAQAWAAAPAQQAOAPAAAVQAAAVgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,10.3,12.6), null);


(lib.Path_13_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAwQgPgPgBgVQAAgXASgQIgPgZIASgKIAPAZQALgDAEAAQAWABAPAPQAOAPAAAVQAAAVgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,10.3,12.6), null);


(lib.Path_12_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_12_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_12_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_12_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_11_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_11_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_11_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_11_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_10_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_10_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_10_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_9_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_9_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_9_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_8_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_6, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_8_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_4, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape.setTransform(2.15,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,4.3,2.2), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_7_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_7_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgFAEIgOAAIAAgUIAZAAIANAWIgSALg");
	this.shape.setTransform(1.95,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_5, new cjs.Rectangle(0,0,3.9,3.4), null);


(lib.Path_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgFAEIgOAAIAAgUIAZAAIANAXIgSAKg");
	this.shape.setTransform(1.95,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,3.9,3.4), null);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAHIAOgXIAYAAIAAAUIgNAAIgHANg");
	this.shape.setTransform(1.95,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,3.9,3.4), null);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAGIAOgWIAYAAIAAAUIgNAAIgHANg");
	this.shape.setTransform(1.95,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,3.9,3.4), null);


(lib.Path_6_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_14, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_6_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_13, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_6_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgqAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQASAAAOAMQAOAMAEASIAOAAIAAATIgOAAQgEASgOAMQgOAMgSAAQgVAAgPgQg");
	this.shape.setTransform(5.825,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_12, new cjs.Rectangle(0,0,11.7,10.4), null);


(lib.Path_6_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAQgPAUgBQAWABAPAPQAPAPAAAUQAAAWgPAPQgPAOgWAAQgUAAgQgOg");
	this.shape.setTransform(5.175,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_11, new cjs.Rectangle(0,0,10.4,10.3), null);


(lib.Path_6_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_10, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_6_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASAKIgTAjg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_9, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_6_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgqAlQgPgPAAgWQAAgUAPgPQAPgPAVgBQASAAAOAMQAOAMAEASIAOAAIAAAUIgOAAQgEARgOAMQgOAMgSgBQgVAAgPgOg");
	this.shape.setTransform(5.825,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_8, new cjs.Rectangle(0,0,11.7,10.3), null);


(lib.Path_6_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgQgPAAgWQAAgUAQgPQAPgPAUgBQAWABAPAPQAPAPAAAUQAAAWgPAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.175,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_7, new cjs.Rectangle(0,0,10.4,10.3), null);


(lib.Path_6_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_6_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZAoQgOgMgEgSIgOAAIAAgTIAOAAQAEgSAOgMQAOgMASAAQAVABAPAPQAPAPAAAUQAAAWgPAPQgPAOgVAAQgSABgOgMg");
	this.shape.setTransform(5.825,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,11.7,10.3), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAPAQQAQAPAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZAoQgOgMgEgSIgOAAIAAgTIAOAAQAEgSAOgMQAOgMASAAQAVAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgVAAQgSAAgOgMg");
	this.shape.setTransform(5.825,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,11.7,10.4), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAVAAAPAPQAQAQAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_5_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_14, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_5_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_13, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_5_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_12, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_5_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAkQgPgPgBgVQABgVAPgPQAPgPAUAAQAWAAAPAPQAOAPAAAVQAAAVgOAPQgPAQgWAAQgUAAgPgQg");
	this.shape.setTransform(5.15,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_11, new cjs.Rectangle(0,0,10.3,10.4), null);


(lib.Path_5_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_10, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_5_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAiIgRALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_9, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_5_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.15,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_8, new cjs.Rectangle(0,0,10.3,10.3), null);


(lib.Path_5_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.15,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_7, new cjs.Rectangle(0,0,10.3,10.3), null);


(lib.Path_5_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAUgkIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_6, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_5_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.15,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,10.3,10.3), null);


(lib.Path_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgQAUAAQAWAAAPAQQAOAPAAAUQAAAWgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,10.3,10.4), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARALIgUAig");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgQAUAAQAWAAAPAQQAOAPAAAUQAAAWgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,10.3,10.4), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgQAUAAQAWAAAPAQQAOAPAAAUQAAAWgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.15,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,10.3,10.4), null);


(lib.Path_4_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_14, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_4_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAMIATgiIASALIgTAig");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_13, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_4_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.075,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_12, new cjs.Rectangle(0,0,4.2,2.1), null);


(lib.Path_4_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_11, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_4_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_10, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgUIApAAIAAAUg");
	this.shape.setTransform(2.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_7, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgMIASgKIATAjIgSAKg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.075,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,4.2,2.1), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.075,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,4.2,2.1), null);


(lib.Path_3_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_14, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_3_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_13, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_3_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_12, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_11, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAVgkIASALIgUAkg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_10, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_3_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgRALg");
	this.shape.setTransform(1.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_9, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgUIApAAIAAAUg");
	this.shape.setTransform(2.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAlIgSAKg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIAUgjIARAKIgUAjg");
	this.shape.setTransform(1.9,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,3.8,4.6), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_2_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTgMIATgLIAUAkIgSALg");
	this.shape.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10, new cjs.Rectangle(0,0,4,4.8), null);


(lib.Path_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgUIApAAIAAAUg");
	this.shape.setTransform(2.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTANIAUgkIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAOIAUglIATALIgUAkg");
	this.shape.setTransform(2.025,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,4.1,4.8), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.15,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,10.3,10.3), null);


(lib.Path_1_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_1_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.075,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,4.2,2.1), null);


(lib.Path_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAPAQQAQAPAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSANIATgjIASAKIgTAjg");
	this.shape.setTransform(1.925,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgUIApAAIAAAUg");
	this.shape.setTransform(2.075,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,4.2,2.1), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgjAlQgQgQAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIASgLIATAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgQgQg");
	this.shape.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSgLIARgLIAUAiIgSALg");
	this.shape.setTransform(1.925,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,3.9,4.6), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape.setTransform(2.05,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,4.1,2.1), null);


(lib.Group_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,219.5,210), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,219.5,210), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,219.5,210), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,219.5,210), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,219.5,210), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,219.5,210), null);


(lib.CompoundPath_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG6AAIDdl/Ijdl+Im6AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdGAIG5AAIDemAIjel+Im5AAg");
	this.shape.setTransform(46.625,40.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeGAIG5AAIDemAIjel+Im5AAg");
	this.shape.setTransform(46.625,40.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjqmUIDqmTIHRAAIDqGTIjqGUgAm5AAIDcF/IG6AAIDel/Ijel+Im6AAg");
	this.shape.setTransform(46.65,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeGAIG5AAIDdmAIjdl+Im5AAg");
	this.shape.setTransform(46.625,40.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDdF/IG6AAIDdl/Ijdl+Im6AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDdl/Ijdl+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdGAIG5AAIDemAIjel+Im5AAg");
	this.shape.setTransform(46.625,40.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm5AAIDdF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDdl/Ijdl+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_2, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDdl/Ijdl+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDel/Ijel+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDdl/Ijdl+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjoGUIjpmUIDpmTIHRAAIDpGTIjpGUgAm6AAIDeF/IG5AAIDdl/Ijdl+Im5AAg");
	this.shape.setTransform(46.625,40.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,93.3,80.8), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(4,1,1).p("EggzgJ/MBBnAAAQBQAAAABQIAARfQAABQhQAAMhBnAAAQhQAAAAhQIAAxfQAAhQBQAAg");
	this.shape.setTransform(0.025,-0.0117,1,1.3425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("EggzAKAQhQAAAAhQIAAxfQAAhQBQAAMBBnAAAQBQAAAABQIAARfQAABQhQAAg");
	this.shape_1.setTransform(0.025,-0.0117,1,1.3425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.9,-87.9,439.9,175.8);


(lib.ico_arrowRight_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgODFICgihImxAAIAAhJIGvAAIieieIAzg2ID7D6Ij7D5g");
	this.shape_1.setTransform(-0.3499,-0.2309,0.7618,0.7615);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ico_arrowRight_1, new cjs.Rectangle(-22.2,-19.2,43.8,38), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btnWelcomeBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68A300").s().p("A8rJoIAAzPMA5XAAAIAATPg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9TK4QgQAAgMgMQgMgMAAgRIAA0dQAAgRAMgLQAMgMAQgBMA6nAAAQAQABAMAMQAMALAAARIAAUdQAAARgMAMQgMAMgQAAgA8rJoMA5XAAAIAAzPMg5XAAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnWelcomeBG, new cjs.Rectangle(-191.5,-69.5,383.1,139.1), null);


(lib.btn_Language = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//let root = this; //you cannot use "this" inside a function
		
		/*function setLabel(thisLabel:String){
			root.txt_label.text = thisLabel;
		}*/
		
		//this.txt_label.text = setLabel;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_3
	this.txt_label = new cjs.Text("Lang", "48px 'Helvetica Neue'", "#333333");
	this.txt_label.name = "txt_label";
	this.txt_label.lineHeight = 59;
	this.txt_label.lineWidth = 324;
	this.txt_label.parent = this;
	this.txt_label.setTransform(110,35.35);

	this.timeline.addTween(cjs.Tween.get(this.txt_label).wait(3));

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-2,-2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,440,132);


(lib.Group_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_43();
	this.instance.setTransform(475.3,183.6,1,1,0,0,0,6,5.2);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.Path_1_14();
	this.instance_1.setTransform(448,128,1,1,0,0,0,5.2,5.2);
	this.instance_1.alpha = 0.8008;

	this.instance_2 = new lib.Path_2_14();
	this.instance_2.setTransform(532.55,97.7,1,1,0,0,0,2,2.4);
	this.instance_2.alpha = 0.8008;

	this.instance_3 = new lib.Path_3_14();
	this.instance_3.setTransform(466.25,96.3,1,1,0,0,0,2,2.4);
	this.instance_3.alpha = 0.8008;

	this.instance_4 = new lib.Path_4_14();
	this.instance_4.setTransform(461.95,103.75,1,1,0,0,0,2,2.4);
	this.instance_4.alpha = 0.8008;

	this.instance_5 = new lib.Path_5_14();
	this.instance_5.setTransform(528.25,90.25,1,1,0,0,0,2,2.4);
	this.instance_5.alpha = 0.8008;

	this.instance_6 = new lib.Path_6_14();
	this.instance_6.setTransform(457.65,111.2,1,1,0,0,0,2,2.4);
	this.instance_6.alpha = 0.8008;

	this.instance_7 = new lib.Path_7_6();
	this.instance_7.setTransform(536.85,105.15,1,1,0,0,0,2,2.4);
	this.instance_7.alpha = 0.8008;

	this.instance_8 = new lib.Path_8_6();
	this.instance_8.setTransform(478.25,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_8.alpha = 0.8008;

	this.instance_9 = new lib.Path_9_6();
	this.instance_9.setTransform(504.05,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_9.alpha = 0.8008;

	this.instance_10 = new lib.Path_10_6();
	this.instance_10.setTransform(512.65,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_10.alpha = 0.8008;

	this.instance_11 = new lib.Path_11_6();
	this.instance_11.setTransform(521.25,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_11.alpha = 0.8008;

	this.instance_12 = new lib.Path_12_6();
	this.instance_12.setTransform(495.45,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_12.alpha = 0.8008;

	this.instance_13 = new lib.Path_13_6();
	this.instance_13.setTransform(541.15,112.6,1,1,0,0,0,2,2.4);
	this.instance_13.alpha = 0.8008;

	this.instance_14 = new lib.Path_14_6();
	this.instance_14.setTransform(470.45,88.85,1,1,0,0,0,1.9,2.5);
	this.instance_14.alpha = 0.8008;

	this.instance_15 = new lib.Path_15_6();
	this.instance_15.setTransform(486.85,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_15.alpha = 0.8008;

	this.instance_16 = new lib.Path_16_6();
	this.instance_16.setTransform(541.55,157.25,1,1,0,0,0,2,2.4);
	this.instance_16.alpha = 0.8008;

	this.instance_17 = new lib.Path_17_6();
	this.instance_17.setTransform(504.85,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_17.alpha = 0.8008;

	this.instance_18 = new lib.Path_18_6();
	this.instance_18.setTransform(528.65,179.6,1,1,0,0,0,2,2.4);
	this.instance_18.alpha = 0.8008;

	this.instance_19 = new lib.Path_19_6();
	this.instance_19.setTransform(487.65,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_19.alpha = 0.8008;

	this.instance_20 = new lib.Path_20_6();
	this.instance_20.setTransform(496.25,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_20.alpha = 0.8008;

	this.instance_21 = new lib.Path_21_6();
	this.instance_21.setTransform(513.45,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_21.alpha = 0.8008;

	this.instance_22 = new lib.Path_22_6();
	this.instance_22.setTransform(549.75,127.5,1,1,0,0,0,2,2.4);
	this.instance_22.alpha = 0.8008;

	this.instance_23 = new lib.Path_23_6();
	this.instance_23.setTransform(522.05,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_23.alpha = 0.8008;

	this.instance_24 = new lib.Path_24_6();
	this.instance_24.setTransform(553.75,134.95,1,1,0,0,0,1.7,2.4);
	this.instance_24.alpha = 0.8008;

	this.instance_25 = new lib.Path_25_6();
	this.instance_25.setTransform(545.45,120.05,1,1,0,0,0,2,2.4);
	this.instance_25.alpha = 0.8008;

	this.instance_26 = new lib.Path_26_3();
	this.instance_26.setTransform(453.35,118.65,1,1,0,0,0,2,2.4);
	this.instance_26.alpha = 0.8008;

	this.instance_27 = new lib.Path_27_2();
	this.instance_27.setTransform(550.15,142.4,1,1,0,0,0,2,2.4);
	this.instance_27.alpha = 0.8008;

	this.instance_28 = new lib.Path_28_2();
	this.instance_28.setTransform(545.85,149.85,1,1,0,0,0,2,2.4);
	this.instance_28.alpha = 0.8008;

	this.instance_29 = new lib.Path_29_2();
	this.instance_29.setTransform(537.25,164.7,1,1,0,0,0,2,2.4);
	this.instance_29.alpha = 0.8008;

	this.instance_30 = new lib.Path_30_2();
	this.instance_30.setTransform(532.95,172.15,1,1,0,0,0,2,2.4);
	this.instance_30.alpha = 0.8008;

	this.instance_31 = new lib.Path_42();
	this.instance_31.setTransform(294.85,48.65,1,1,0,0,0,5.2,5.2);
	this.instance_31.alpha = 0.8008;

	this.instance_32 = new lib.Path_1_13();
	this.instance_32.setTransform(320.45,3.55,1,1,0,0,0,1.9,2.2);
	this.instance_32.alpha = 0.8008;

	this.instance_33 = new lib.Path_2_13();
	this.instance_33.setTransform(327.1,1,1,1,0,0,0,2,1);
	this.instance_33.alpha = 0.8008;

	this.instance_34 = new lib.Path_3_13();
	this.instance_34.setTransform(384.6,15.3,1,1,0,0,0,1.9,2.3);
	this.instance_34.alpha = 0.8008;

	this.instance_35 = new lib.Path_4_13();
	this.instance_35.setTransform(316.35,10.75,1,1,0,0,0,1.9,2.3);
	this.instance_35.alpha = 0.8008;

	this.instance_36 = new lib.Path_5_13();
	this.instance_36.setTransform(380.45,8.2,1,1,0,0,0,1.9,2.3);
	this.instance_36.alpha = 0.8008;

	this.instance_37 = new lib.Path_6_13();
	this.instance_37.setTransform(312.25,17.85,1,1,0,0,0,1.9,2.3);
	this.instance_37.alpha = 0.8008;

	this.instance_38 = new lib.Path_7_5();
	this.instance_38.setTransform(376.3,1.7,1,1,0,0,0,1.9,1.7);
	this.instance_38.alpha = 0.8008;

	this.instance_39 = new lib.Path_8_5();
	this.instance_39.setTransform(368.15,1,1,1,0,0,0,2,1);
	this.instance_39.alpha = 0.8008;

	this.instance_40 = new lib.Path_9_5();
	this.instance_40.setTransform(351.75,1,1,1,0,0,0,2,1);
	this.instance_40.alpha = 0.8008;

	this.instance_41 = new lib.Path_10_5();
	this.instance_41.setTransform(343.55,1,1,1,0,0,0,2,1);
	this.instance_41.alpha = 0.8008;

	this.instance_42 = new lib.Path_11_5();
	this.instance_42.setTransform(335.35,1,1,1,0,0,0,2,1);
	this.instance_42.alpha = 0.8008;

	this.instance_43 = new lib.Path_12_5();
	this.instance_43.setTransform(359.95,1,1,1,0,0,0,2,1);
	this.instance_43.alpha = 0.8008;

	this.instance_44 = new lib.Path_13_5();
	this.instance_44.setTransform(378.45,90.4,1,1,0,0,0,5.2,6.3);
	this.instance_44.alpha = 0.8008;

	this.instance_45 = new lib.Path_14_5();
	this.instance_45.setTransform(389.55,72.1,1,1,0,0,0,1.9,2.2);
	this.instance_45.alpha = 0.8008;

	this.instance_46 = new lib.Path_15_5();
	this.instance_46.setTransform(388.7,22.4,1,1,0,0,0,1.9,2.3);
	this.instance_46.alpha = 0.8008;

	this.instance_47 = new lib.Path_16_5();
	this.instance_47.setTransform(397.8,57.95,1,1,0,0,0,1.9,2.3);
	this.instance_47.alpha = 0.8008;

	this.instance_48 = new lib.Path_17_5();
	this.instance_48.setTransform(401.9,50.85,1,1,0,0,0,1.9,2.3);
	this.instance_48.alpha = 0.8008;

	this.instance_49 = new lib.Path_18_5();
	this.instance_49.setTransform(385.45,79.3,1,1,0,0,0,1.9,2.3);
	this.instance_49.alpha = 0.8008;

	this.instance_50 = new lib.Path_19_5();
	this.instance_50.setTransform(393.65,65,1,1,0,0,0,1.9,2.2);
	this.instance_50.alpha = 0.8008;

	this.instance_51 = new lib.Path_20_5();
	this.instance_51.setTransform(308.15,24.95,1,1,0,0,0,1.9,2.3);
	this.instance_51.alpha = 0.8008;

	this.instance_52 = new lib.Path_21_5();
	this.instance_52.setTransform(392.8,29.45,1,1,0,0,0,1.9,2.2);
	this.instance_52.alpha = 0.8008;

	this.instance_53 = new lib.Path_22_5();
	this.instance_53.setTransform(299.95,39.1,1,1,0,0,0,1.9,2.2);
	this.instance_53.alpha = 0.8008;

	this.instance_54 = new lib.Path_23_5();
	this.instance_54.setTransform(401,43.75,1,1,0,0,0,1.9,2.3);
	this.instance_54.alpha = 0.8008;

	this.instance_55 = new lib.Path_24_5();
	this.instance_55.setTransform(396.9,36.65,1,1,0,0,0,1.9,2.3);
	this.instance_55.alpha = 0.8008;

	this.instance_56 = new lib.Path_25_5();
	this.instance_56.setTransform(304.05,32,1,1,0,0,0,1.9,2.2);
	this.instance_56.alpha = 0.8008;

	this.instance_57 = new lib.Path_41();
	this.instance_57.setTransform(272,220.6,1,1,0,0,0,2,1);
	this.instance_57.alpha = 0.8008;

	this.instance_58 = new lib.Path_1_12();
	this.instance_58.setTransform(280.2,220.6,1,1,0,0,0,2,1);
	this.instance_58.alpha = 0.8008;

	this.instance_59 = new lib.Path_2_12();
	this.instance_59.setTransform(255.6,220.6,1,1,0,0,0,2,1);
	this.instance_59.alpha = 0.8008;

	this.instance_60 = new lib.Path_3_12();
	this.instance_60.setTransform(263.8,220.6,1,1,0,0,0,2,1);
	this.instance_60.alpha = 0.8008;

	this.instance_61 = new lib.Path_4_12();
	this.instance_61.setTransform(288.4,220.6,1,1,0,0,0,2,1);
	this.instance_61.alpha = 0.8008;

	this.instance_62 = new lib.Path_5_12();
	this.instance_62.setTransform(298.75,220.65,1,1,0,0,0,5.2,5.2);
	this.instance_62.alpha = 0.8008;

	this.instance_63 = new lib.Path_6_12();
	this.instance_63.setTransform(243.65,220.65,1,1,0,0,0,5.8,5.2);
	this.instance_63.alpha = 0.8008;

	this.instance_64 = new lib.Path_40();
	this.instance_64.setTransform(128.5,40.8,1,1,0,0,0,2,1);
	this.instance_64.alpha = 0.8008;

	this.instance_65 = new lib.Path_1_11();
	this.instance_65.setTransform(120.25,40.8,1,1,0,0,0,2,1);
	this.instance_65.alpha = 0.8008;

	this.instance_66 = new lib.Path_2_11();
	this.instance_66.setTransform(136.7,40.8,1,1,0,0,0,2,1);
	this.instance_66.alpha = 0.8008;

	this.instance_67 = new lib.Path_3_11();
	this.instance_67.setTransform(103.85,40.8,1,1,0,0,0,2,1);
	this.instance_67.alpha = 0.8008;

	this.instance_68 = new lib.Path_4_11();
	this.instance_68.setTransform(112.05,40.8,1,1,0,0,0,2,1);
	this.instance_68.alpha = 0.8008;

	this.instance_69 = new lib.Path_5_11();
	this.instance_69.setTransform(93.7,40.85,1,1,0,0,0,5.2,5.2);
	this.instance_69.alpha = 0.8008;

	this.instance_70 = new lib.Path_6_11();
	this.instance_70.setTransform(144.6,40.4,1,1,0,0,0,5.2,5.2);
	this.instance_70.alpha = 0.8008;

	this.instance_71 = new lib.Polygon_12();
	this.instance_71.setTransform(45.6,216.75,1,1,0,0,0,45.4,39.4);
	this.instance_71.alpha = 0.8008;

	this.instance_72 = new lib.Polygon_1_2();
	this.instance_72.setTransform(46.7,130.95,1,1,0,0,0,45.5,39.4);
	this.instance_72.alpha = 0.5;

	this.instance_73 = new lib.Polygon_2_2();
	this.instance_73.setTransform(196.35,40.4,1,1,0,0,0,45.4,39.4);
	this.instance_73.alpha = 0.5;

	this.instance_74 = new lib.Polygon_3_2();
	this.instance_74.setTransform(120.6,87.45,1,1,0,0,0,45.5,39.4);
	this.instance_74.alpha = 0.8008;

	this.instance_75 = new lib.Polygon_4_2();
	this.instance_75.setTransform(120.6,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_75.alpha = 0.5;

	this.instance_76 = new lib.Polygon_5_2();
	this.instance_76.setTransform(196.35,214.05,1,1,0,0,0,45.4,39.4);
	this.instance_76.alpha = 0.5;

	this.instance_77 = new lib.Polygon_6_2();
	this.instance_77.setTransform(499.05,135.35,1,1,0,0,0,45.5,39.4);
	this.instance_77.alpha = 0.8008;

	this.instance_78 = new lib.Polygon_7_2();
	this.instance_78.setTransform(349.2,48.1,1,1,0,0,0,45.5,39.4);
	this.instance_78.alpha = 0.8008;

	this.instance_79 = new lib.CompoundPath_7();
	this.instance_79.setTransform(577.15,95.95,1,1,0,0,0,46.6,40.4);
	this.instance_79.alpha = 0.5;

	this.instance_80 = new lib.CompoundPath_1_2();
	this.instance_80.setTransform(349.15,218.8,1,1,0,0,0,46.6,40.4);
	this.instance_80.alpha = 0.5;

	this.instance_81 = new lib.CompoundPath_2_2();
	this.instance_81.setTransform(120.55,258.15,1,1,0,0,0,46.6,40.4);
	this.instance_81.alpha = 0.5;

	this.instance_82 = new lib.CompoundPath_3_2();
	this.instance_82.setTransform(46.6,42.45,1,1,0,0,0,46.6,40.4);
	this.instance_82.alpha = 0.5;

	this.instance_83 = new lib.CompoundPath_4_2();
	this.instance_83.setTransform(196.35,126.8,1,1,0,0,0,46.6,40.4);
	this.instance_83.alpha = 0.5;

	this.instance_84 = new lib.CompoundPath_5_2();
	this.instance_84.setTransform(272.15,87.45,1,1,0,0,0,46.6,40.4);
	this.instance_84.alpha = 0.5;

	this.instance_85 = new lib.Polygon_8_2();
	this.instance_85.setTransform(272.25,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_85.alpha = 0.8008;

	this.instance_86 = new lib.Polygon_9_2();
	this.instance_86.setTransform(349.2,135.35,1,1,0,0,0,45.5,39.4);
	this.instance_86.alpha = 0.8008;

	this.instance_87 = new lib.Polygon_10_2();
	this.instance_87.setTransform(423.9,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_87.alpha = 0.5;

	this.instance_88 = new lib.Path_39();
	this.instance_88.setTransform(629.5,457.3,1,1,0,0,0,6,5.2);
	this.instance_88.alpha = 0.8008;

	this.instance_89 = new lib.Path_1_10();
	this.instance_89.setTransform(602.2,401.65,1,1,0,0,0,5.2,5.2);
	this.instance_89.alpha = 0.8008;

	this.instance_90 = new lib.Path_2_10();
	this.instance_90.setTransform(686.75,371.4,1,1,0,0,0,2,2.4);
	this.instance_90.alpha = 0.8008;

	this.instance_91 = new lib.Path_3_10();
	this.instance_91.setTransform(620.45,370,1,1,0,0,0,2,2.4);
	this.instance_91.alpha = 0.8008;

	this.instance_92 = new lib.Path_4_10();
	this.instance_92.setTransform(616.15,377.45,1,1,0,0,0,2,2.4);
	this.instance_92.alpha = 0.8008;

	this.instance_93 = new lib.Path_5_10();
	this.instance_93.setTransform(682.45,363.95,1,1,0,0,0,2,2.4);
	this.instance_93.alpha = 0.8008;

	this.instance_94 = new lib.Path_6_10();
	this.instance_94.setTransform(611.85,384.9,1,1,0,0,0,2,2.4);
	this.instance_94.alpha = 0.8008;

	this.instance_95 = new lib.Path_7_4();
	this.instance_95.setTransform(691.05,378.85,1,1,0,0,0,2,2.4);
	this.instance_95.alpha = 0.8008;

	this.instance_96 = new lib.Path_8_4();
	this.instance_96.setTransform(632.45,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_96.alpha = 0.8008;

	this.instance_97 = new lib.Path_9_4();
	this.instance_97.setTransform(658.25,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_97.alpha = 0.8008;

	this.instance_98 = new lib.Path_10_4();
	this.instance_98.setTransform(666.85,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_98.alpha = 0.8008;

	this.instance_99 = new lib.Path_11_4();
	this.instance_99.setTransform(675.45,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_99.alpha = 0.8008;

	this.instance_100 = new lib.Path_12_4();
	this.instance_100.setTransform(649.65,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_100.alpha = 0.8008;

	this.instance_101 = new lib.Path_13_4();
	this.instance_101.setTransform(695.35,386.3,1,1,0,0,0,2,2.4);
	this.instance_101.alpha = 0.8008;

	this.instance_102 = new lib.Path_14_4();
	this.instance_102.setTransform(624.65,362.55,1,1,0,0,0,1.9,2.5);
	this.instance_102.alpha = 0.8008;

	this.instance_103 = new lib.Path_15_4();
	this.instance_103.setTransform(641.05,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_103.alpha = 0.8008;

	this.instance_104 = new lib.Path_16_4();
	this.instance_104.setTransform(695.75,430.95,1,1,0,0,0,2,2.4);
	this.instance_104.alpha = 0.8008;

	this.instance_105 = new lib.Path_17_4();
	this.instance_105.setTransform(659.05,456.85,1,1,0,0,0,2.1,1.1);
	this.instance_105.alpha = 0.8008;

	this.instance_106 = new lib.Path_18_4();
	this.instance_106.setTransform(682.85,453.3,1,1,0,0,0,2,2.4);
	this.instance_106.alpha = 0.8008;

	this.instance_107 = new lib.Path_19_4();
	this.instance_107.setTransform(641.85,456.85,1,1,0,0,0,2.1,1.1);
	this.instance_107.alpha = 0.8008;

	this.instance_108 = new lib.Path_20_4();
	this.instance_108.setTransform(650.45,456.85,1,1,0,0,0,2.1,1.1);
	this.instance_108.alpha = 0.8008;

	this.instance_109 = new lib.Path_21_4();
	this.instance_109.setTransform(667.65,456.85,1,1,0,0,0,2.1,1.1);
	this.instance_109.alpha = 0.8008;

	this.instance_110 = new lib.Path_22_4();
	this.instance_110.setTransform(703.95,401.2,1,1,0,0,0,2,2.4);
	this.instance_110.alpha = 0.8008;

	this.instance_111 = new lib.Path_23_4();
	this.instance_111.setTransform(676.25,456.85,1,1,0,0,0,2.1,1.1);
	this.instance_111.alpha = 0.8008;

	this.instance_112 = new lib.Path_24_4();
	this.instance_112.setTransform(707.95,408.6,1,1,0,0,0,1.7,2.4);
	this.instance_112.alpha = 0.8008;

	this.instance_113 = new lib.Path_25_4();
	this.instance_113.setTransform(699.65,393.75,1,1,0,0,0,2,2.4);
	this.instance_113.alpha = 0.8008;

	this.instance_114 = new lib.Path_26_2();
	this.instance_114.setTransform(607.55,392.35,1,1,0,0,0,2,2.4);
	this.instance_114.alpha = 0.8008;

	this.instance_115 = new lib.Path_27_1();
	this.instance_115.setTransform(704.35,416.05,1,1,0,0,0,2,2.4);
	this.instance_115.alpha = 0.8008;

	this.instance_116 = new lib.Path_28_1();
	this.instance_116.setTransform(700.05,423.5,1,1,0,0,0,2,2.4);
	this.instance_116.alpha = 0.8008;

	this.instance_117 = new lib.Path_29_1();
	this.instance_117.setTransform(691.45,438.4,1,1,0,0,0,2,2.4);
	this.instance_117.alpha = 0.8008;

	this.instance_118 = new lib.Path_30_1();
	this.instance_118.setTransform(687.15,445.85,1,1,0,0,0,2,2.4);
	this.instance_118.alpha = 0.8008;

	this.instance_119 = new lib.Path_38();
	this.instance_119.setTransform(449.05,322.35,1,1,0,0,0,5.2,5.2);
	this.instance_119.alpha = 0.8008;

	this.instance_120 = new lib.Path_1_9();
	this.instance_120.setTransform(474.65,277.25,1,1,0,0,0,1.9,2.2);
	this.instance_120.alpha = 0.8008;

	this.instance_121 = new lib.Path_2_9();
	this.instance_121.setTransform(481.3,274.65,1,1,0,0,0,2,1);
	this.instance_121.alpha = 0.8008;

	this.instance_122 = new lib.Path_3_9();
	this.instance_122.setTransform(538.8,289,1,1,0,0,0,1.9,2.3);
	this.instance_122.alpha = 0.8008;

	this.instance_123 = new lib.Path_4_9();
	this.instance_123.setTransform(470.55,284.35,1,1,0,0,0,1.9,2.2);
	this.instance_123.alpha = 0.8008;

	this.instance_124 = new lib.Path_5_9();
	this.instance_124.setTransform(534.65,281.9,1,1,0,0,0,1.9,2.3);
	this.instance_124.alpha = 0.8008;

	this.instance_125 = new lib.Path_6_9();
	this.instance_125.setTransform(466.45,291.55,1,1,0,0,0,1.9,2.3);
	this.instance_125.alpha = 0.8008;

	this.instance_126 = new lib.Path_7_3();
	this.instance_126.setTransform(530.5,275.35,1,1,0,0,0,1.9,1.7);
	this.instance_126.alpha = 0.8008;

	this.instance_127 = new lib.Path_8_3();
	this.instance_127.setTransform(522.35,274.65,1,1,0,0,0,2,1);
	this.instance_127.alpha = 0.8008;

	this.instance_128 = new lib.Path_9_3();
	this.instance_128.setTransform(505.95,274.65,1,1,0,0,0,2,1);
	this.instance_128.alpha = 0.8008;

	this.instance_129 = new lib.Path_10_3();
	this.instance_129.setTransform(497.75,274.65,1,1,0,0,0,2,1);
	this.instance_129.alpha = 0.8008;

	this.instance_130 = new lib.Path_11_3();
	this.instance_130.setTransform(489.55,274.65,1,1,0,0,0,2,1);
	this.instance_130.alpha = 0.8008;

	this.instance_131 = new lib.Path_12_3();
	this.instance_131.setTransform(514.15,274.65,1,1,0,0,0,2,1);
	this.instance_131.alpha = 0.8008;

	this.instance_132 = new lib.Path_13_3();
	this.instance_132.setTransform(532.65,364.1,1,1,0,0,0,5.2,6.3);
	this.instance_132.alpha = 0.8008;

	this.instance_133 = new lib.Path_14_3();
	this.instance_133.setTransform(543.75,345.8,1,1,0,0,0,1.9,2.2);
	this.instance_133.alpha = 0.8008;

	this.instance_134 = new lib.Path_15_3();
	this.instance_134.setTransform(542.9,296.1,1,1,0,0,0,1.9,2.3);
	this.instance_134.alpha = 0.8008;

	this.instance_135 = new lib.Path_16_3();
	this.instance_135.setTransform(552,331.65,1,1,0,0,0,1.9,2.3);
	this.instance_135.alpha = 0.8008;

	this.instance_136 = new lib.Path_17_3();
	this.instance_136.setTransform(556.1,324.55,1,1,0,0,0,1.9,2.3);
	this.instance_136.alpha = 0.8008;

	this.instance_137 = new lib.Path_18_3();
	this.instance_137.setTransform(539.65,352.9,1,1,0,0,0,1.9,2.2);
	this.instance_137.alpha = 0.8008;

	this.instance_138 = new lib.Path_19_3();
	this.instance_138.setTransform(547.85,338.75,1,1,0,0,0,1.9,2.3);
	this.instance_138.alpha = 0.8008;

	this.instance_139 = new lib.Path_20_3();
	this.instance_139.setTransform(462.35,298.65,1,1,0,0,0,1.9,2.3);
	this.instance_139.alpha = 0.8008;

	this.instance_140 = new lib.Path_21_3();
	this.instance_140.setTransform(547,303.2,1,1,0,0,0,1.9,2.3);
	this.instance_140.alpha = 0.8008;

	this.instance_141 = new lib.Path_22_3();
	this.instance_141.setTransform(454.15,312.8,1,1,0,0,0,1.9,2.2);
	this.instance_141.alpha = 0.8008;

	this.instance_142 = new lib.Path_23_3();
	this.instance_142.setTransform(555.2,317.35,1,1,0,0,0,1.9,2.2);
	this.instance_142.alpha = 0.8008;

	this.instance_143 = new lib.Path_24_3();
	this.instance_143.setTransform(551.1,310.25,1,1,0,0,0,1.9,2.2);
	this.instance_143.alpha = 0.8008;

	this.instance_144 = new lib.Path_25_3();
	this.instance_144.setTransform(458.25,305.75,1,1,0,0,0,1.9,2.3);
	this.instance_144.alpha = 0.8008;

	this.instance_145 = new lib.Path_37();
	this.instance_145.setTransform(426.2,494.3,1,1,0,0,0,2,1);
	this.instance_145.alpha = 0.8008;

	this.instance_146 = new lib.Path_1_8();
	this.instance_146.setTransform(434.4,494.3,1,1,0,0,0,2,1);
	this.instance_146.alpha = 0.8008;

	this.instance_147 = new lib.Path_2_8();
	this.instance_147.setTransform(409.8,494.3,1,1,0,0,0,2,1);
	this.instance_147.alpha = 0.8008;

	this.instance_148 = new lib.Path_3_8();
	this.instance_148.setTransform(418,494.3,1,1,0,0,0,2,1);
	this.instance_148.alpha = 0.8008;

	this.instance_149 = new lib.Path_4_8();
	this.instance_149.setTransform(442.65,494.3,1,1,0,0,0,2,1);
	this.instance_149.alpha = 0.8008;

	this.instance_150 = new lib.Path_5_8();
	this.instance_150.setTransform(453,494.35,1,1,0,0,0,5.2,5.2);
	this.instance_150.alpha = 0.8008;

	this.instance_151 = new lib.Path_6_8();
	this.instance_151.setTransform(397.85,494.35,1,1,0,0,0,5.8,5.2);
	this.instance_151.alpha = 0.8008;

	this.instance_152 = new lib.Path_36();
	this.instance_152.setTransform(282.7,314.55,1,1,0,0,0,2,1.1);
	this.instance_152.alpha = 0.8008;

	this.instance_153 = new lib.Path_1_7();
	this.instance_153.setTransform(274.45,314.55,1,1,0,0,0,2,1.1);
	this.instance_153.alpha = 0.8008;

	this.instance_154 = new lib.Path_2_7();
	this.instance_154.setTransform(290.9,314.55,1,1,0,0,0,2,1.1);
	this.instance_154.alpha = 0.8008;

	this.instance_155 = new lib.Path_3_7();
	this.instance_155.setTransform(258.05,314.55,1,1,0,0,0,2,1.1);
	this.instance_155.alpha = 0.8008;

	this.instance_156 = new lib.Path_4_7();
	this.instance_156.setTransform(266.25,314.55,1,1,0,0,0,2,1.1);
	this.instance_156.alpha = 0.8008;

	this.instance_157 = new lib.Path_5_7();
	this.instance_157.setTransform(247.9,314.55,1,1,0,0,0,5.2,5.2);
	this.instance_157.alpha = 0.8008;

	this.instance_158 = new lib.Path_6_7();
	this.instance_158.setTransform(298.8,314.1,1,1,0,0,0,5.2,5.2);
	this.instance_158.alpha = 0.8008;

	this.instance_159 = new lib.Polygon_11();
	this.instance_159.setTransform(199.8,490.45,1,1,0,0,0,45.4,39.4);
	this.instance_159.alpha = 0.8008;

	this.instance_160 = new lib.Polygon_1_1();
	this.instance_160.setTransform(200.9,404.6,1,1,0,0,0,45.5,39.4);
	this.instance_160.alpha = 0.5;

	this.instance_161 = new lib.Polygon_2_1();
	this.instance_161.setTransform(350.55,314.1,1,1,0,0,0,45.4,39.4);
	this.instance_161.alpha = 0.5;

	this.instance_162 = new lib.Polygon_3_1();
	this.instance_162.setTransform(274.8,361.15,1,1,0,0,0,45.5,39.4);
	this.instance_162.alpha = 0.8008;

	this.instance_163 = new lib.Polygon_4_1();
	this.instance_163.setTransform(274.8,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_163.alpha = 0.5;

	this.instance_164 = new lib.Polygon_5_1();
	this.instance_164.setTransform(350.55,487.75,1,1,0,0,0,45.4,39.4);
	this.instance_164.alpha = 0.5;

	this.instance_165 = new lib.Polygon_6_1();
	this.instance_165.setTransform(653.25,409,1,1,0,0,0,45.5,39.4);
	this.instance_165.alpha = 0.8008;

	this.instance_166 = new lib.Polygon_7_1();
	this.instance_166.setTransform(503.4,321.8,1,1,0,0,0,45.5,39.4);
	this.instance_166.alpha = 0.8008;

	this.instance_167 = new lib.CompoundPath_6();
	this.instance_167.setTransform(731.35,369.65,1,1,0,0,0,46.6,40.4);
	this.instance_167.alpha = 0.5;

	this.instance_168 = new lib.CompoundPath_1_1();
	this.instance_168.setTransform(503.35,492.5,1,1,0,0,0,46.6,40.4);
	this.instance_168.alpha = 0.5;

	this.instance_169 = new lib.CompoundPath_2_1();
	this.instance_169.setTransform(274.75,531.85,1,1,0,0,0,46.6,40.4);
	this.instance_169.alpha = 0.5;

	this.instance_170 = new lib.CompoundPath_3_1();
	this.instance_170.setTransform(200.85,316.1,1,1,0,0,0,46.6,40.4);
	this.instance_170.alpha = 0.5;

	this.instance_171 = new lib.CompoundPath_4_1();
	this.instance_171.setTransform(350.55,400.5,1,1,0,0,0,46.6,40.4);
	this.instance_171.alpha = 0.5;

	this.instance_172 = new lib.CompoundPath_5_1();
	this.instance_172.setTransform(426.35,361.15,1,1,0,0,0,46.6,40.4);
	this.instance_172.alpha = 0.5;

	this.instance_173 = new lib.Polygon_8_1();
	this.instance_173.setTransform(426.45,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_173.alpha = 0.8008;

	this.instance_174 = new lib.Polygon_9_1();
	this.instance_174.setTransform(503.4,409.05,1,1,0,0,0,45.5,39.4);
	this.instance_174.alpha = 0.8008;

	this.instance_175 = new lib.Polygon_10_1();
	this.instance_175.setTransform(578.1,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_175.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,778,572.2), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_35();
	this.instance.setTransform(302.7,183.6,1,1,0,0,0,6,5.2);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.setTransform(330.05,128,1,1,0,0,0,5.2,5.2);
	this.instance_1.alpha = 0.8008;

	this.instance_2 = new lib.Path_2_6();
	this.instance_2.setTransform(245.4,97.75,1,1,0,0,0,2,2.4);
	this.instance_2.alpha = 0.8008;

	this.instance_3 = new lib.Path_3_6();
	this.instance_3.setTransform(311.75,96.35,1,1,0,0,0,2,2.4);
	this.instance_3.alpha = 0.8008;

	this.instance_4 = new lib.Path_4_6();
	this.instance_4.setTransform(316.05,103.75,1,1,0,0,0,2,2.4);
	this.instance_4.alpha = 0.8008;

	this.instance_5 = new lib.Path_5_6();
	this.instance_5.setTransform(249.7,90.3,1,1,0,0,0,2,2.4);
	this.instance_5.alpha = 0.8008;

	this.instance_6 = new lib.Path_6_6();
	this.instance_6.setTransform(320.35,111.2,1,1,0,0,0,2,2.4);
	this.instance_6.alpha = 0.8008;

	this.instance_7 = new lib.Path_7_2();
	this.instance_7.setTransform(241.1,105.15,1,1,0,0,0,2,2.4);
	this.instance_7.alpha = 0.8008;

	this.instance_8 = new lib.Path_8_2();
	this.instance_8.setTransform(299.65,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_8.alpha = 0.8008;

	this.instance_9 = new lib.Path_9_2();
	this.instance_9.setTransform(273.85,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_9.alpha = 0.8008;

	this.instance_10 = new lib.Path_10_2();
	this.instance_10.setTransform(265.25,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_10.alpha = 0.8008;

	this.instance_11 = new lib.Path_11_2();
	this.instance_11.setTransform(256.65,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_11.alpha = 0.8008;

	this.instance_12 = new lib.Path_12_2();
	this.instance_12.setTransform(282.45,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_12.alpha = 0.8008;

	this.instance_13 = new lib.Path_13_2();
	this.instance_13.setTransform(236.8,112.6,1,1,0,0,0,2,2.4);
	this.instance_13.alpha = 0.8008;

	this.instance_14 = new lib.Path_14_2();
	this.instance_14.setTransform(307.6,88.85,1,1,0,0,0,1.9,2.5);
	this.instance_14.alpha = 0.8008;

	this.instance_15 = new lib.Path_15_2();
	this.instance_15.setTransform(291.05,87.45,1,1,0,0,0,2.1,1.1);
	this.instance_15.alpha = 0.8008;

	this.instance_16 = new lib.Path_16_2();
	this.instance_16.setTransform(236.4,157.3,1,1,0,0,0,2,2.4);
	this.instance_16.alpha = 0.8008;

	this.instance_17 = new lib.Path_17_2();
	this.instance_17.setTransform(273,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_17.alpha = 0.8008;

	this.instance_18 = new lib.Path_18_2();
	this.instance_18.setTransform(249.3,179.65,1,1,0,0,0,2,2.4);
	this.instance_18.alpha = 0.8008;

	this.instance_19 = new lib.Path_19_2();
	this.instance_19.setTransform(290.2,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_19.alpha = 0.8008;

	this.instance_20 = new lib.Path_20_2();
	this.instance_20.setTransform(281.6,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_20.alpha = 0.8008;

	this.instance_21 = new lib.Path_21_2();
	this.instance_21.setTransform(264.4,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_21.alpha = 0.8008;

	this.instance_22 = new lib.Path_22_2();
	this.instance_22.setTransform(228.2,127.5,1,1,0,0,0,2,2.4);
	this.instance_22.alpha = 0.8008;

	this.instance_23 = new lib.Path_23_2();
	this.instance_23.setTransform(255.8,183.2,1,1,0,0,0,2.1,1.1);
	this.instance_23.alpha = 0.8008;

	this.instance_24 = new lib.Path_24_2();
	this.instance_24.setTransform(224.2,134.95,1,1,0,0,0,1.7,2.4);
	this.instance_24.alpha = 0.8008;

	this.instance_25 = new lib.Path_25_2();
	this.instance_25.setTransform(232.5,120.05,1,1,0,0,0,2,2.4);
	this.instance_25.alpha = 0.8008;

	this.instance_26 = new lib.Path_26_1();
	this.instance_26.setTransform(324.65,118.65,1,1,0,0,0,2,2.4);
	this.instance_26.alpha = 0.8008;

	this.instance_27 = new lib.Path_27_0();
	this.instance_27.setTransform(227.8,142.4,1,1,0,0,0,2,2.4);
	this.instance_27.alpha = 0.8008;

	this.instance_28 = new lib.Path_28_0();
	this.instance_28.setTransform(232.1,149.85,1,1,0,0,0,2,2.4);
	this.instance_28.alpha = 0.8008;

	this.instance_29 = new lib.Path_29_0();
	this.instance_29.setTransform(240.7,164.75,1,1,0,0,0,2,2.4);
	this.instance_29.alpha = 0.8008;

	this.instance_30 = new lib.Path_30_0();
	this.instance_30.setTransform(245,172.2,1,1,0,0,0,2,2.4);
	this.instance_30.alpha = 0.8008;

	this.instance_31 = new lib.Path_34();
	this.instance_31.setTransform(483.2,48.7,1,1,0,0,0,5.2,5.2);
	this.instance_31.alpha = 0.8008;

	this.instance_32 = new lib.Path_1_5();
	this.instance_32.setTransform(457.5,3.65,1,1,0,0,0,1.9,2.3);
	this.instance_32.alpha = 0.8008;

	this.instance_33 = new lib.Path_2_5();
	this.instance_33.setTransform(450.75,1,1,1,0,0,0,2,1);
	this.instance_33.alpha = 0.8008;

	this.instance_34 = new lib.Path_3_5();
	this.instance_34.setTransform(393.4,15.25,1,1,0,0,0,1.9,2.2);
	this.instance_34.alpha = 0.8008;

	this.instance_35 = new lib.Path_4_5();
	this.instance_35.setTransform(461.6,10.7,1,1,0,0,0,1.9,2.2);
	this.instance_35.alpha = 0.8008;

	this.instance_36 = new lib.Path_5_5();
	this.instance_36.setTransform(397.5,8.15,1,1,0,0,0,1.9,2.2);
	this.instance_36.alpha = 0.8008;

	this.instance_37 = new lib.Path_6_5();
	this.instance_37.setTransform(465.7,17.8,1,1,0,0,0,1.9,2.2);
	this.instance_37.alpha = 0.8008;

	this.instance_38 = new lib.Path_7_1();
	this.instance_38.setTransform(401.6,1.7,1,1,0,0,0,1.9,1.7);
	this.instance_38.alpha = 0.8008;

	this.instance_39 = new lib.Path_8_1();
	this.instance_39.setTransform(409.7,1,1,1,0,0,0,2,1);
	this.instance_39.alpha = 0.8008;

	this.instance_40 = new lib.Path_9_1();
	this.instance_40.setTransform(426.15,1,1,1,0,0,0,2,1);
	this.instance_40.alpha = 0.8008;

	this.instance_41 = new lib.Path_10_1();
	this.instance_41.setTransform(434.35,1,1,1,0,0,0,2,1);
	this.instance_41.alpha = 0.8008;

	this.instance_42 = new lib.Path_11_1();
	this.instance_42.setTransform(442.55,1,1,1,0,0,0,2,1);
	this.instance_42.alpha = 0.8008;

	this.instance_43 = new lib.Path_12_1();
	this.instance_43.setTransform(417.95,1,1,1,0,0,0,2,1);
	this.instance_43.alpha = 0.8008;

	this.instance_44 = new lib.Path_13_1();
	this.instance_44.setTransform(399.65,90.45,1,1,0,0,0,5.2,6.3);
	this.instance_44.alpha = 0.8008;

	this.instance_45 = new lib.Path_14_1();
	this.instance_45.setTransform(388.4,72.2,1,1,0,0,0,1.9,2.3);
	this.instance_45.alpha = 0.8008;

	this.instance_46 = new lib.Path_15_1();
	this.instance_46.setTransform(389.3,22.45,1,1,0,0,0,1.9,2.3);
	this.instance_46.alpha = 0.8008;

	this.instance_47 = new lib.Path_16_1();
	this.instance_47.setTransform(380.2,58,1,1,0,0,0,1.9,2.3);
	this.instance_47.alpha = 0.8008;

	this.instance_48 = new lib.Path_17_1();
	this.instance_48.setTransform(376.1,50.8,1,1,0,0,0,1.9,2.2);
	this.instance_48.alpha = 0.8008;

	this.instance_49 = new lib.Path_18_1();
	this.instance_49.setTransform(392.5,79.25,1,1,0,0,0,1.9,2.2);
	this.instance_49.alpha = 0.8008;

	this.instance_50 = new lib.Path_19_1();
	this.instance_50.setTransform(384.3,65.1,1,1,0,0,0,1.9,2.3);
	this.instance_50.alpha = 0.8008;

	this.instance_51 = new lib.Path_20_1();
	this.instance_51.setTransform(469.8,25,1,1,0,0,0,1.9,2.3);
	this.instance_51.alpha = 0.8008;

	this.instance_52 = new lib.Path_21_1();
	this.instance_52.setTransform(385.15,29.55,1,1,0,0,0,1.9,2.3);
	this.instance_52.alpha = 0.8008;

	this.instance_53 = new lib.Path_22_1();
	this.instance_53.setTransform(478,39.2,1,1,0,0,0,1.9,2.3);
	this.instance_53.alpha = 0.8008;

	this.instance_54 = new lib.Path_23_1();
	this.instance_54.setTransform(376.95,43.7,1,1,0,0,0,1.9,2.2);
	this.instance_54.alpha = 0.8008;

	this.instance_55 = new lib.Path_24_1();
	this.instance_55.setTransform(381.05,36.65,1,1,0,0,0,1.9,2.3);
	this.instance_55.alpha = 0.8008;

	this.instance_56 = new lib.Path_25_1();
	this.instance_56.setTransform(473.9,32.1,1,1,0,0,0,1.9,2.3);
	this.instance_56.alpha = 0.8008;

	this.instance_57 = new lib.Path_33();
	this.instance_57.setTransform(505.9,220.6,1,1,0,0,0,2,1);
	this.instance_57.alpha = 0.8008;

	this.instance_58 = new lib.Path_1_4();
	this.instance_58.setTransform(497.65,220.6,1,1,0,0,0,2,1);
	this.instance_58.alpha = 0.8008;

	this.instance_59 = new lib.Path_2_4();
	this.instance_59.setTransform(522.3,220.6,1,1,0,0,0,2,1);
	this.instance_59.alpha = 0.8008;

	this.instance_60 = new lib.Path_3_4();
	this.instance_60.setTransform(514.1,220.6,1,1,0,0,0,2,1);
	this.instance_60.alpha = 0.8008;

	this.instance_61 = new lib.Path_4_4();
	this.instance_61.setTransform(489.45,220.6,1,1,0,0,0,2,1);
	this.instance_61.alpha = 0.8008;

	this.instance_62 = new lib.Path_5_4();
	this.instance_62.setTransform(479.3,220.7,1,1,0,0,0,5.2,5.2);
	this.instance_62.alpha = 0.8008;

	this.instance_63 = new lib.Path_6_4();
	this.instance_63.setTransform(534.3,220.7,1,1,0,0,0,5.8,5.2);
	this.instance_63.alpha = 0.8008;

	this.instance_64 = new lib.Path_32();
	this.instance_64.setTransform(649.4,40.8,1,1,0,0,0,2,1);
	this.instance_64.alpha = 0.8008;

	this.instance_65 = new lib.Path_1_3();
	this.instance_65.setTransform(657.6,40.8,1,1,0,0,0,2,1);
	this.instance_65.alpha = 0.8008;

	this.instance_66 = new lib.Path_2_3();
	this.instance_66.setTransform(641.2,40.8,1,1,0,0,0,2,1);
	this.instance_66.alpha = 0.8008;

	this.instance_67 = new lib.Path_3_3();
	this.instance_67.setTransform(674.05,40.8,1,1,0,0,0,2,1);
	this.instance_67.alpha = 0.8008;

	this.instance_68 = new lib.Path_4_3();
	this.instance_68.setTransform(665.8,40.8,1,1,0,0,0,2,1);
	this.instance_68.alpha = 0.8008;

	this.instance_69 = new lib.Path_5_3();
	this.instance_69.setTransform(684.4,40.85,1,1,0,0,0,5.2,5.2);
	this.instance_69.alpha = 0.8008;

	this.instance_70 = new lib.Path_6_3();
	this.instance_70.setTransform(633.45,40.4,1,1,0,0,0,5.2,5.2);
	this.instance_70.alpha = 0.8008;

	this.instance_71 = new lib.Polygon_0();
	this.instance_71.setTransform(732.4,216.8,1,1,0,0,0,45.5,39.4);
	this.instance_71.alpha = 0.8008;

	this.instance_72 = new lib.Polygon_1_0();
	this.instance_72.setTransform(731.4,130.95,1,1,0,0,0,45.5,39.4);
	this.instance_72.alpha = 0.5;

	this.instance_73 = new lib.Polygon_2_0();
	this.instance_73.setTransform(581.6,40.45,1,1,0,0,0,45.4,39.4);
	this.instance_73.alpha = 0.5;

	this.instance_74 = new lib.Polygon_3_0();
	this.instance_74.setTransform(657.5,87.5,1,1,0,0,0,45.5,39.4);
	this.instance_74.alpha = 0.8008;

	this.instance_75 = new lib.Polygon_4_0();
	this.instance_75.setTransform(657.5,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_75.alpha = 0.5;

	this.instance_76 = new lib.Polygon_5_0();
	this.instance_76.setTransform(581.6,214.1,1,1,0,0,0,45.4,39.4);
	this.instance_76.alpha = 0.5;

	this.instance_77 = new lib.Polygon_6_0();
	this.instance_77.setTransform(279.05,135.35,1,1,0,0,0,45.5,39.4);
	this.instance_77.alpha = 0.8008;

	this.instance_78 = new lib.Polygon_7_0();
	this.instance_78.setTransform(428.8,48.15,1,1,0,0,0,45.4,39.4);
	this.instance_78.alpha = 0.8008;

	this.instance_79 = new lib.CompoundPath_0();
	this.instance_79.setTransform(200.8,96,1,1,0,0,0,46.6,40.4);
	this.instance_79.alpha = 0.5;

	this.instance_80 = new lib.CompoundPath_1_0();
	this.instance_80.setTransform(428.8,218.8,1,1,0,0,0,46.6,40.4);
	this.instance_80.alpha = 0.5;

	this.instance_81 = new lib.CompoundPath_2_0();
	this.instance_81.setTransform(657.4,258.15,1,1,0,0,0,46.6,40.4);
	this.instance_81.alpha = 0.5;

	this.instance_82 = new lib.CompoundPath_3_0();
	this.instance_82.setTransform(731.3,42.45,1,1,0,0,0,46.6,40.4);
	this.instance_82.alpha = 0.5;

	this.instance_83 = new lib.CompoundPath_4_0();
	this.instance_83.setTransform(581.6,126.8,1,1,0,0,0,46.6,40.4);
	this.instance_83.alpha = 0.5;

	this.instance_84 = new lib.CompoundPath_5_0();
	this.instance_84.setTransform(505.75,87.45,1,1,0,0,0,46.6,40.4);
	this.instance_84.alpha = 0.5;

	this.instance_85 = new lib.Polygon_8_0();
	this.instance_85.setTransform(505.85,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_85.alpha = 0.8008;

	this.instance_86 = new lib.Polygon_9_0();
	this.instance_86.setTransform(428.8,135.35,1,1,0,0,0,45.4,39.4);
	this.instance_86.alpha = 0.8008;

	this.instance_87 = new lib.Polygon_10_0();
	this.instance_87.setTransform(354.2,174.7,1,1,0,0,0,45.5,39.4);
	this.instance_87.alpha = 0.5;

	this.instance_88 = new lib.Path_31();
	this.instance_88.setTransform(148.5,457.3,1,1,0,0,0,6,5.2);
	this.instance_88.alpha = 0.8008;

	this.instance_89 = new lib.Path_1_2();
	this.instance_89.setTransform(175.85,401.7,1,1,0,0,0,5.2,5.2);
	this.instance_89.alpha = 0.8008;

	this.instance_90 = new lib.Path_2_2();
	this.instance_90.setTransform(91.2,371.4,1,1,0,0,0,2,2.4);
	this.instance_90.alpha = 0.8008;

	this.instance_91 = new lib.Path_3_2();
	this.instance_91.setTransform(157.55,370,1,1,0,0,0,2,2.4);
	this.instance_91.alpha = 0.8008;

	this.instance_92 = new lib.Path_4_2();
	this.instance_92.setTransform(161.85,377.45,1,1,0,0,0,2,2.4);
	this.instance_92.alpha = 0.8008;

	this.instance_93 = new lib.Path_5_2();
	this.instance_93.setTransform(95.5,363.95,1,1,0,0,0,2,2.4);
	this.instance_93.alpha = 0.8008;

	this.instance_94 = new lib.Path_6_2();
	this.instance_94.setTransform(166.15,384.9,1,1,0,0,0,2,2.4);
	this.instance_94.alpha = 0.8008;

	this.instance_95 = new lib.Path_7_0();
	this.instance_95.setTransform(86.9,378.85,1,1,0,0,0,2,2.4);
	this.instance_95.alpha = 0.8008;

	this.instance_96 = new lib.Path_8_0();
	this.instance_96.setTransform(145.45,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_96.alpha = 0.8008;

	this.instance_97 = new lib.Path_9_0();
	this.instance_97.setTransform(119.65,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_97.alpha = 0.8008;

	this.instance_98 = new lib.Path_10_0();
	this.instance_98.setTransform(111.05,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_98.alpha = 0.8008;

	this.instance_99 = new lib.Path_11_0();
	this.instance_99.setTransform(102.45,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_99.alpha = 0.8008;

	this.instance_100 = new lib.Path_12_0();
	this.instance_100.setTransform(128.25,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_100.alpha = 0.8008;

	this.instance_101 = new lib.Path_13_0();
	this.instance_101.setTransform(82.6,386.3,1,1,0,0,0,2,2.4);
	this.instance_101.alpha = 0.8008;

	this.instance_102 = new lib.Path_14_0();
	this.instance_102.setTransform(153.4,362.55,1,1,0,0,0,1.9,2.5);
	this.instance_102.alpha = 0.8008;

	this.instance_103 = new lib.Path_15_0();
	this.instance_103.setTransform(136.85,361.15,1,1,0,0,0,2.1,1.1);
	this.instance_103.alpha = 0.8008;

	this.instance_104 = new lib.Path_16_0();
	this.instance_104.setTransform(82.2,431,1,1,0,0,0,2,2.4);
	this.instance_104.alpha = 0.8008;

	this.instance_105 = new lib.Path_17_0();
	this.instance_105.setTransform(118.8,456.9,1,1,0,0,0,2.1,1.1);
	this.instance_105.alpha = 0.8008;

	this.instance_106 = new lib.Path_18_0();
	this.instance_106.setTransform(95.1,453.35,1,1,0,0,0,2,2.4);
	this.instance_106.alpha = 0.8008;

	this.instance_107 = new lib.Path_19_0();
	this.instance_107.setTransform(136,456.9,1,1,0,0,0,2.1,1.1);
	this.instance_107.alpha = 0.8008;

	this.instance_108 = new lib.Path_20_0();
	this.instance_108.setTransform(127.4,456.9,1,1,0,0,0,2.1,1.1);
	this.instance_108.alpha = 0.8008;

	this.instance_109 = new lib.Path_21_0();
	this.instance_109.setTransform(110.2,456.9,1,1,0,0,0,2.1,1.1);
	this.instance_109.alpha = 0.8008;

	this.instance_110 = new lib.Path_22_0();
	this.instance_110.setTransform(74,401.2,1,1,0,0,0,2,2.4);
	this.instance_110.alpha = 0.8008;

	this.instance_111 = new lib.Path_23_0();
	this.instance_111.setTransform(101.6,456.9,1,1,0,0,0,2.1,1.1);
	this.instance_111.alpha = 0.8008;

	this.instance_112 = new lib.Path_24_0();
	this.instance_112.setTransform(70,408.65,1,1,0,0,0,1.7,2.4);
	this.instance_112.alpha = 0.8008;

	this.instance_113 = new lib.Path_25_0();
	this.instance_113.setTransform(78.3,393.75,1,1,0,0,0,2,2.4);
	this.instance_113.alpha = 0.8008;

	this.instance_114 = new lib.Path_26_0();
	this.instance_114.setTransform(170.45,392.35,1,1,0,0,0,2,2.4);
	this.instance_114.alpha = 0.8008;

	this.instance_115 = new lib.Path_27();
	this.instance_115.setTransform(73.6,416.1,1,1,0,0,0,2,2.4);
	this.instance_115.alpha = 0.8008;

	this.instance_116 = new lib.Path_28();
	this.instance_116.setTransform(77.9,423.55,1,1,0,0,0,2,2.4);
	this.instance_116.alpha = 0.8008;

	this.instance_117 = new lib.Path_29();
	this.instance_117.setTransform(86.5,438.45,1,1,0,0,0,2,2.4);
	this.instance_117.alpha = 0.8008;

	this.instance_118 = new lib.Path_30();
	this.instance_118.setTransform(90.8,445.9,1,1,0,0,0,2,2.4);
	this.instance_118.alpha = 0.8008;

	this.instance_119 = new lib.Path_26();
	this.instance_119.setTransform(329,322.4,1,1,0,0,0,5.2,5.2);
	this.instance_119.alpha = 0.8008;

	this.instance_120 = new lib.Path_1_1();
	this.instance_120.setTransform(303.3,277.35,1,1,0,0,0,1.9,2.3);
	this.instance_120.alpha = 0.8008;

	this.instance_121 = new lib.Path_2_1();
	this.instance_121.setTransform(296.55,274.7,1,1,0,0,0,2,1);
	this.instance_121.alpha = 0.8008;

	this.instance_122 = new lib.Path_3_1();
	this.instance_122.setTransform(239.2,288.95,1,1,0,0,0,1.9,2.2);
	this.instance_122.alpha = 0.8008;

	this.instance_123 = new lib.Path_4_1();
	this.instance_123.setTransform(307.4,284.45,1,1,0,0,0,1.9,2.3);
	this.instance_123.alpha = 0.8008;

	this.instance_124 = new lib.Path_5_1();
	this.instance_124.setTransform(243.3,281.9,1,1,0,0,0,1.9,2.3);
	this.instance_124.alpha = 0.8008;

	this.instance_125 = new lib.Path_6_1();
	this.instance_125.setTransform(311.5,291.5,1,1,0,0,0,1.9,2.2);
	this.instance_125.alpha = 0.8008;

	this.instance_126 = new lib.Path_7();
	this.instance_126.setTransform(247.4,275.4,1,1,0,0,0,1.9,1.7);
	this.instance_126.alpha = 0.8008;

	this.instance_127 = new lib.Path_8();
	this.instance_127.setTransform(255.5,274.7,1,1,0,0,0,2,1);
	this.instance_127.alpha = 0.8008;

	this.instance_128 = new lib.Path_9();
	this.instance_128.setTransform(271.95,274.7,1,1,0,0,0,2,1);
	this.instance_128.alpha = 0.8008;

	this.instance_129 = new lib.Path_10();
	this.instance_129.setTransform(280.15,274.7,1,1,0,0,0,2,1);
	this.instance_129.alpha = 0.8008;

	this.instance_130 = new lib.Path_11();
	this.instance_130.setTransform(288.35,274.7,1,1,0,0,0,2,1);
	this.instance_130.alpha = 0.8008;

	this.instance_131 = new lib.Path_12();
	this.instance_131.setTransform(263.75,274.7,1,1,0,0,0,2,1);
	this.instance_131.alpha = 0.8008;

	this.instance_132 = new lib.Path_13();
	this.instance_132.setTransform(245.45,364.15,1,1,0,0,0,5.2,6.3);
	this.instance_132.alpha = 0.8008;

	this.instance_133 = new lib.Path_14();
	this.instance_133.setTransform(234.2,345.9,1,1,0,0,0,1.9,2.3);
	this.instance_133.alpha = 0.8008;

	this.instance_134 = new lib.Path_15();
	this.instance_134.setTransform(235.1,296.05,1,1,0,0,0,1.9,2.2);
	this.instance_134.alpha = 0.8008;

	this.instance_135 = new lib.Path_16();
	this.instance_135.setTransform(226,331.6,1,1,0,0,0,1.9,2.2);
	this.instance_135.alpha = 0.8008;

	this.instance_136 = new lib.Path_17();
	this.instance_136.setTransform(221.85,324.5,1,1,0,0,0,1.9,2.2);
	this.instance_136.alpha = 0.8008;

	this.instance_137 = new lib.Path_18();
	this.instance_137.setTransform(238.3,353,1,1,0,0,0,1.9,2.3);
	this.instance_137.alpha = 0.8008;

	this.instance_138 = new lib.Path_19();
	this.instance_138.setTransform(230.1,338.8,1,1,0,0,0,1.9,2.3);
	this.instance_138.alpha = 0.8008;

	this.instance_139 = new lib.Path_20();
	this.instance_139.setTransform(315.6,298.6,1,1,0,0,0,1.9,2.2);
	this.instance_139.alpha = 0.8008;

	this.instance_140 = new lib.Path_21();
	this.instance_140.setTransform(230.95,303.25,1,1,0,0,0,1.9,2.3);
	this.instance_140.alpha = 0.8008;

	this.instance_141 = new lib.Path_22();
	this.instance_141.setTransform(323.8,312.9,1,1,0,0,0,1.9,2.3);
	this.instance_141.alpha = 0.8008;

	this.instance_142 = new lib.Path_23();
	this.instance_142.setTransform(222.75,317.45,1,1,0,0,0,1.9,2.3);
	this.instance_142.alpha = 0.8008;

	this.instance_143 = new lib.Path_24();
	this.instance_143.setTransform(226.85,310.35,1,1,0,0,0,1.9,2.3);
	this.instance_143.alpha = 0.8008;

	this.instance_144 = new lib.Path_25();
	this.instance_144.setTransform(319.7,305.8,1,1,0,0,0,1.9,2.3);
	this.instance_144.alpha = 0.8008;

	this.instance_145 = new lib.Path_0();
	this.instance_145.setTransform(351.7,494.3,1,1,0,0,0,2,1);
	this.instance_145.alpha = 0.8008;

	this.instance_146 = new lib.Path_1_0();
	this.instance_146.setTransform(343.45,494.3,1,1,0,0,0,2,1);
	this.instance_146.alpha = 0.8008;

	this.instance_147 = new lib.Path_2_0();
	this.instance_147.setTransform(368.1,494.3,1,1,0,0,0,2,1);
	this.instance_147.alpha = 0.8008;

	this.instance_148 = new lib.Path_3_0();
	this.instance_148.setTransform(359.9,494.3,1,1,0,0,0,2,1);
	this.instance_148.alpha = 0.8008;

	this.instance_149 = new lib.Path_4_0();
	this.instance_149.setTransform(335.25,494.3,1,1,0,0,0,2,1);
	this.instance_149.alpha = 0.8008;

	this.instance_150 = new lib.Path_5_0();
	this.instance_150.setTransform(325.1,494.35,1,1,0,0,0,5.2,5.2);
	this.instance_150.alpha = 0.8008;

	this.instance_151 = new lib.Path_6_0();
	this.instance_151.setTransform(380.1,494.35,1,1,0,0,0,5.8,5.2);
	this.instance_151.alpha = 0.8008;

	this.instance_152 = new lib.Path();
	this.instance_152.setTransform(495.2,314.5,1,1,0,0,0,2,1);
	this.instance_152.alpha = 0.8008;

	this.instance_153 = new lib.Path_1();
	this.instance_153.setTransform(503.4,314.5,1,1,0,0,0,2,1);
	this.instance_153.alpha = 0.8008;

	this.instance_154 = new lib.Path_2();
	this.instance_154.setTransform(487,314.5,1,1,0,0,0,2,1);
	this.instance_154.alpha = 0.8008;

	this.instance_155 = new lib.Path_3();
	this.instance_155.setTransform(519.85,314.5,1,1,0,0,0,2,1);
	this.instance_155.alpha = 0.8008;

	this.instance_156 = new lib.Path_4();
	this.instance_156.setTransform(511.6,314.5,1,1,0,0,0,2,1);
	this.instance_156.alpha = 0.8008;

	this.instance_157 = new lib.Path_5();
	this.instance_157.setTransform(530.2,314.55,1,1,0,0,0,5.2,5.2);
	this.instance_157.alpha = 0.8008;

	this.instance_158 = new lib.Path_6();
	this.instance_158.setTransform(479.25,314.1,1,1,0,0,0,5.2,5.2);
	this.instance_158.alpha = 0.8008;

	this.instance_159 = new lib.Polygon();
	this.instance_159.setTransform(578.2,490.5,1,1,0,0,0,45.5,39.4);
	this.instance_159.alpha = 0.8008;

	this.instance_160 = new lib.Polygon_1();
	this.instance_160.setTransform(577.2,404.65,1,1,0,0,0,45.5,39.4);
	this.instance_160.alpha = 0.5;

	this.instance_161 = new lib.Polygon_2();
	this.instance_161.setTransform(427.4,314.1,1,1,0,0,0,45.4,39.4);
	this.instance_161.alpha = 0.5;

	this.instance_162 = new lib.Polygon_3();
	this.instance_162.setTransform(503.3,361.2,1,1,0,0,0,45.5,39.4);
	this.instance_162.alpha = 0.8008;

	this.instance_163 = new lib.Polygon_4();
	this.instance_163.setTransform(503.3,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_163.alpha = 0.5;

	this.instance_164 = new lib.Polygon_5();
	this.instance_164.setTransform(427.4,487.75,1,1,0,0,0,45.4,39.4);
	this.instance_164.alpha = 0.5;

	this.instance_165 = new lib.Polygon_6();
	this.instance_165.setTransform(124.85,409.05,1,1,0,0,0,45.5,39.4);
	this.instance_165.alpha = 0.8008;

	this.instance_166 = new lib.Polygon_7();
	this.instance_166.setTransform(274.6,321.85,1,1,0,0,0,45.4,39.4);
	this.instance_166.alpha = 0.8008;

	this.instance_167 = new lib.CompoundPath();
	this.instance_167.setTransform(46.6,369.7,1,1,0,0,0,46.6,40.4);
	this.instance_167.alpha = 0.5;

	this.instance_168 = new lib.CompoundPath_1();
	this.instance_168.setTransform(274.6,492.5,1,1,0,0,0,46.6,40.4);
	this.instance_168.alpha = 0.5;

	this.instance_169 = new lib.CompoundPath_2();
	this.instance_169.setTransform(503.2,531.85,1,1,0,0,0,46.6,40.4);
	this.instance_169.alpha = 0.5;

	this.instance_170 = new lib.CompoundPath_3();
	this.instance_170.setTransform(577.1,316.15,1,1,0,0,0,46.6,40.4);
	this.instance_170.alpha = 0.5;

	this.instance_171 = new lib.CompoundPath_4();
	this.instance_171.setTransform(427.4,400.5,1,1,0,0,0,46.6,40.4);
	this.instance_171.alpha = 0.5;

	this.instance_172 = new lib.CompoundPath_5();
	this.instance_172.setTransform(351.55,361.15,1,1,0,0,0,46.6,40.4);
	this.instance_172.alpha = 0.5;

	this.instance_173 = new lib.Polygon_8();
	this.instance_173.setTransform(351.65,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_173.alpha = 0.8008;

	this.instance_174 = new lib.Polygon_9();
	this.instance_174.setTransform(274.6,409.05,1,1,0,0,0,45.4,39.4);
	this.instance_174.alpha = 0.8008;

	this.instance_175 = new lib.Polygon_10();
	this.instance_175.setTransform(200,448.4,1,1,0,0,0,45.5,39.4);
	this.instance_175.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,778,572.2), null);


(lib.selUserType = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*
		function setLabel(thisLabel:String){
			txt_label.text = thisLabel;
		}
		
		function setDesc(thisLabel:String){
			txt_desc.text = thisLabel;
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.txt_desc = new cjs.Text("Description: Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo.", "18px 'Helvetica Neue'", "#333333");
	this.txt_desc.name = "txt_desc";
	this.txt_desc.lineHeight = 23;
	this.txt_desc.lineWidth = 324;
	this.txt_desc.parent = this;
	this.txt_desc.setTransform(86.65,72.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("ADSAAQAABXg+A+Qg9A9hXAAQhWAAg+g9Qg9g+AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWg");
	this.shape.setTransform(45.8,44.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");
	this.shape_1.setTransform(45.8,44.55);

	this.txt_label = new cjs.Text("Label", "bold 32px 'Helvetica Neue'", "#333333");
	this.txt_label.name = "txt_label";
	this.txt_label.lineHeight = 40;
	this.txt_label.lineWidth = 324;
	this.txt_label.parent = this;
	this.txt_label.setTransform(86.65,24.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(4,1,1).p("EggzgJ/MBBnAAAQBQAAAABQIAARfQAABQhQAAMhBnAAAQhQAAAAhQIAAxfQAAhQBQAAg");
	this.shape_2.setTransform(217.975,86.5383,1,1.3425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("EggzAKAQhQAAAAhQIAAxfQAAhQBQAAMBBnAAAQBQAAAABQIAARfQAABQhQAAg");
	this.shape_3.setTransform(217.975,86.5383,1,1.3425);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(217.95,84.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,4,4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#009900").ss(4,1,1).p("EggzgJ/MBBnAAAQBQAAAABQIAARfQAABQhQAAMhBnAAAQhQAAAAhQIAAxfQAAhQBQAAg");
	this.shape_4.setTransform(217.975,86.5383,1,1.3425);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(22.8,21.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(22.8,21.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_12();
	this.instance_3.setTransform(-2,-1.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.txt_label,p:{y:24.25,text:"Label"}},{t:this.shape_1,p:{y:44.55}},{t:this.shape,p:{y:44.55}},{t:this.txt_desc,p:{y:72.8,text:"Description: Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo."}}]}).to({state:[{t:this.instance},{t:this.txt_label,p:{y:22.3,text:"Crushing Mill User"}},{t:this.shape_1,p:{y:42.6}},{t:this.shape,p:{y:42.6}},{t:this.txt_desc,p:{y:70.85,text:"Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo."}}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.txt_label,p:{y:24.25,text:"Crushing Mill User"}},{t:this.shape_1,p:{y:44.55}},{t:this.shape,p:{y:44.55}},{t:this.txt_desc,p:{y:72.8,text:"Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo."}}]},1).to({state:[{t:this.instance_3},{t:this.txt_label,p:{y:24.25,text:"Crushing Mill User"}},{t:this.instance_2},{t:this.txt_desc,p:{y:72.8,text:"Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo."}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-4.3,453,189);


(lib.btn_continue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		/* stop();
		
		function setLabel(thisLabel:String){
			txt_label.text = thisLabel;
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// ico_arrowRight
	this.instance = new lib.ico_arrowRight_1();
	this.instance.setTransform(113.45,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-0.85},0).wait(1).to({y:0.05},0).wait(1));

	// CONTINUE
	this.text = new cjs.Text("NEXT", "bold 38px 'Helvetica Neue'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 47;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(71.65,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AzYnnMAmxAAAQCgAAAACgIAAKPQAACgigAAMgmxAAAQigAAAAigIAAqPQAAigCgAAg");
	this.shape.setTransform(25.925,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D426").s().p("AzYHoQigAAAAigIAAqPQAAigCgAAMAmxAAAQCgAAAACgIAAKPQAACgigAAg");
	this.shape_1.setTransform(25.925,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-50.7,284.3,101.5);


(lib.btnWelcomeMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/* stop();
		
		function setLabel(thisLabel:String){
			txt_label.text = thisLabel;
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.txt_label = new cjs.Text("START", "bold 68px 'Helvetica Neue'", "#FFFFFF");
	this.txt_label.name = "txt_label";
	this.txt_label.textAlign = "center";
	this.txt_label.lineHeight = 83;
	this.txt_label.lineWidth = 360;
	this.txt_label.parent = this;
	this.txt_label.setTransform(-0.2,-37);
	this.txt_label.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.instance = new lib.btnWelcomeBG();
	this.instance.setTransform(-0.2,6);
	this.instance.shadow = new cjs.Shadow("#000000",0,2,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-0.2,y:6}},{t:this.txt_label,p:{x:-0.2,y:-37}}]}).to({state:[{t:this.instance,p:{x:0,y:0}},{t:this.txt_label,p:{x:0,y:-43}}]},1).to({state:[{t:this.instance,p:{x:-0.2,y:6}},{t:this.txt_label,p:{x:-0.2,y:-37}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.5,-72.5,425,166);


(lib.McButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.start_down();
	this.instance.setTransform(0.05,0,1.2443,1.2443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-3},0).wait(1).to({y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-110.5,224,232);


(lib.btn_SelectLanguage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.start_down();
	this.instance.setTransform(0.05,0,1.2443,1.2443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-3},0).wait(1).to({y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-110.5,224,232);


(lib.btn_continue_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		function setLabel(thisLabel:String){
			txt_label.text = thisLabel;
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// ico_arrowRight
	this.instance_1 = new lib.ico_arrowRight();
	this.instance_1.setTransform(113.45,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-0.85},0).wait(1).to({y:0.05},0).wait(1));

	// CONTINUE
	this.text_1 = new cjs.Text("CONTINUE", "bold 38px 'Helvetica Neue'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 232;
	this.text_1.parent = this;
	this.text_1.setTransform(71.65,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({y:-23.55},0).wait(1).to({y:-22.65},0).wait(1));

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(4,1,1).p("AzYnnMAmxAAAQCgAAAACgIAAKPQAACgigAAMgmxAAAQigAAAAigIAAqPQAAigCgAAg");
	this.shape_2.setTransform(3.104,0.025,1.1612,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D426").s().p("AzYHoQigAAAAigIAAqPQAAigCgAAMAmxAAAQCgAAAACgIAAKPQAACgigAAg");
	this.shape_3.setTransform(3.104,0.025,1.1612,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-50.7,329.8,101.5);


(lib.accent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* //--MovieClip(stage.getChildAt(0)).stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(728.25,169.8,0.5,0.5);

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.setTransform(1086.2,449.6,1,1,0,0,0,389,286.1);
	this.instance_1.alpha = 0.6016;

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(1014.4,469.5,0.5,0.5);

	this.instance_3 = new lib.Group_1_1();
	this.instance_3.setTransform(758.8,364.35,1,1,0,0,0,109.8,105);
	this.instance_3.alpha = 0.3008;

	this.instance_4 = new lib.Group_2_0();
	this.instance_4.setTransform(1093.35,735.35,1,1,0,0,0,109.8,105.1);
	this.instance_4.alpha = 0.3008;

	this.instance_5 = new lib.Group_3_0();
	this.instance_5.setTransform(1030.75,485.15,1,1,0,0,0,109.8,105);
	this.instance_5.alpha = 0.3008;

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(339.3,6.3,0.5,0.5);

	this.instance_7 = new lib.Group_1_0();
	this.instance_7.setTransform(388.9,286.1,1,1,0,0,0,388.9,286.1);
	this.instance_7.alpha = 0.6016;

	this.instance_8 = new lib.CachedBmp_4();
	this.instance_8.setTransform(241.2,306.05,0.5,0.5);

	this.instance_9 = new lib.Group_1();
	this.instance_9.setTransform(716.4,200.95,1,1,0,0,0,109.8,105.1);
	this.instance_9.alpha = 0.3008;

	this.instance_10 = new lib.Group_2();
	this.instance_10.setTransform(381.85,571.8,1,1,0,0,0,109.8,105);
	this.instance_10.alpha = 0.3008;

	this.instance_11 = new lib.Group_3();
	this.instance_11.setTransform(444.45,321.7,1,1,0,0,0,109.8,105);
	this.instance_11.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.accent, new cjs.Rectangle(0,0,1475.2,840.3), null);


// stage content:
(lib._CRP_training = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,9,14,19];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		let root = this;
		
		let language = "english";	
			
		
		this.txt_output.text = "";
		
		//this.btn_lang01.gotoAndStop(3); //-- English as the default language
		//this.btn_lang01.play();
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		this.btnGo.addEventListener("mouseover", btnGo_onRollOver);
		function btnGo_onRollOver() {
			root.txt_output.text = "..";
		}
		
		this.btnGo.addEventListener("mouseout", btnGo_onRollOut);
		function btnGo_onRollOut() {
			root.txt_output.text = ".";
		}
		
		this.btnGo.addEventListener("click", btnGo_onClick.bind(this));
		function btnGo_onClick() {
			root.play();
			root.txt_output.text = "...";
			//alert("Language selected: " + language);
		}
		
		
		
		//-- Default language: english
		this.btn_lang01.gotoAndStop(2);
		
		this.btn_lang01.txt_label.text = "English";
		this.btn_lang02.txt_label.text = "Linguagem";
		
		this.btn_lang01.cursor = 'pointer';
		this.btn_lang02.cursor = 'pointer';
		
		
		//-- English
		this.btn_lang01.addEventListener("mouseover", btn_lang01_onRollOver);
		function btn_lang01_onRollOver() {
			if (language === "english") {
				root.btn_lang01.gotoAndStop(2);
			} else {
				root.btn_lang01.gotoAndStop(1);
			}
		}
		this.btn_lang01.addEventListener("mouseout", btn_lang01_onRollOut);
		function btn_lang01_onRollOut() {
			if (language === "english") {
				root.btn_lang01.gotoAndStop(2);
			} else {
				root.btn_lang01.gotoAndStop(0);
			}
		}
		this.btn_lang01.addEventListener("click", btn_lang01_onClick.bind(this));
		function btn_lang01_onClick() {
			if (language === "english") {
				root.btn_lang02.gotoAndStop(2);
			} else {
				root.btn_lang01.gotoAndStop(2);
				root.btn_lang02.gotoAndStop(0);
				language = "english";	
			}
		}
		
		
		
		//-- Portuguese
		this.btn_lang02.addEventListener("mouseover", btn_lang02_onRollOver);
		function btn_lang02_onRollOver() {
			if (language === "portuguese") {
				root.btn_lang02.gotoAndStop(2);
			} else {
				root.btn_lang02.gotoAndStop(1);
			}
		}
		this.btn_lang02.addEventListener("mouseout", btn_lang02_onRollOut);
		function btn_lang02_onRollOut() {
			if (language === "portuguese") {
				root.btn_lang02.gotoAndStop(2);
			} else {
				root.btn_lang02.gotoAndStop(0);
			}
		}
		this.btn_lang02.addEventListener("click", btn_lang02_onClick.bind(this));
		function btn_lang02_onClick() {
			if (language === "portuguese") {
				root.btn_lang02.gotoAndStop(2);
			} else {
				root.btn_lang01.gotoAndStop(0);
				root.btn_lang02.gotoAndStop(2);
				language = "portuguese";	
			}
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		
		this.btnStart.cursor = 'pointer';
		
		this.btnStart.addEventListener("click", btnStart_onClick.bind(this));
		function btnStart_onClick() {
			this.play();
			//window.open("T03_connie.html", "_self");
			//-- alert("Language selected: " + language);
		}
	}
	this.frame_9 = function() {
		this.stop();
		
		
		this.btnContinue.cursor = 'pointer';
		
		this.btnContinue.addEventListener("click", btnContinue_onClick.bind(this));
		function btnContinue_onClick() {
			this.play();
			//window.open("T04_yourName.html", "_self");
			//-- alert("Language selected: " + language);
		}
		
		
		
		
		
		
		
		
		
		
		/* stop();
		import flash.display.MovieClip;
		import flash.events.MouseEvent;
		//-- Developer comments
		
		
		//-- Global Vars
		btnNext.mouseChildren = false;
		btnNext.useHandCursor = buttonMode = true;
		
		
		//-- Functions
		
		function startIntro(e:MouseEvent){
			trace("Language selected: " + language);
			play();
		}
		
		
		//-- Event Listeners
		btnNext.addEventListener(MouseEvent.CLICK, startIntro); 
		
		*/
		
		
		
		
		
		
		
		
		
		
		/* stop();
		import flash.display.MovieClip;
		import flash.events.MouseEvent;
		//-- Developer comments
		
		
		//-- Global Vars
		btnNext.mouseChildren = false;
		btnNext.useHandCursor = buttonMode = true;
		
		
		//-- Functions
		
		function startIntro(e:MouseEvent){
			trace("Language selected: " + language);
			play();
		}
		
		
		//-- Event Listeners
		btnNext.addEventListener(MouseEvent.CLICK, startIntro); 
		
		*/
	}
	this.frame_14 = function() {
		
		this.stop();
		
		
		
		
		this.btn_Next.addEventListener("click", btn_Next_onClick.bind(this));
		function btn_Next_onClick() {
			//document.getElementById("input_YourName").focus();
			//this.username = document.getElementByID("inputYourName").value;  //get the text from the inputfield
			//username = document.getElementById("inputYourName");
			//document.getElementByID("inputYourName").value = "hello";
			alert("Value is " + username);
			//alert("Language selected: " + language);  // learn how to pass variable from one frame to another
			//root.play();
			this.play();
		}
		
		
		
		///* TextInput Text Change Event
		//Any change in the text of the TextInput control results into execution of this function in which you can add your own custom code.
		
		//Instructions:
		//1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		//*/
		//if(!this.inputYourName_change_cbk) {
		//	function inputYourName_change(evt) {
		//		// Start your custom code
		//		alert("testing123");
		//		console.log(evt.target.value);
		//		// End your custom code
		//	}
		//	$("#dom_overlay_container").on("change", "#inputYourName", inputYourName_change.bind(this));
		//	this.inputYourName_change_cbk = true;
		//}
		
		
		
		
		
		/* Get value from any UI Control
		Use this snippet to query the current value of any Control.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		*/
		
		// Start your custom code
		//console.log($("#inputYourName").val());
		// End your custom code
		
		
		
		
		
		
		
		
		
		
		
		//var val;
		
		//function init() {
		//	infoContainer = new createjs.Container();
		//	stage.addChild(infoContainer);
		//	
		//	button = new lib.generalBtn_(); // OK button
		//	infoContainer.addChild (button);
		//	
		//	inputField1 = new lib.inputField_();
		//	infoContainer.addChild(inputField1);
		//	
		//	button.addEventListener("click", getValue);
		//	createjs.Tween.get().wait(100).call(setCaret);
		//}
		
		
		
		
		//function setCaret() {
		//	document.getElementById('input_YourName').focus();
		//	
		//	//document.getElementById ('answer box') .value="%";
		//	/*setCaretToPos (document.getElementById('answer box'), 0); // move the caret to the front of the input field function setSelectionRange (input, selectionStart, selectionEnd) ( // function to change the position of the caret in the textfield
		//	if (input.setSelectionRange) {
		//		input. focus () ;
		//		input. setSelectionRange (selectionStart, selectionEnd);
		//	} else if (input.createTextRange) {
		//		var range = input.createTextRange () ;
		//		range.collapse (true);
		//		range.moveEnd ('character', selectionEnd);
		//		range.moveStart ('character', selectionStart);
		//		range.select () ;
		//	} */
		//}
		
		//function getValue() {
		//	val = document.getElementByID("input_YourName").value;  //get the text from the inputfield
		//	alert("Value is " + val);
		//	
		//	document.getElementByID("input_YourName").style.visibility = "hidden";  // hide the text field
		//}
		//	
		/*	
		function setCaretToPos (input, pos) { // function to change the position of the caret in the textfield
			setSelectionRange (input, pos, pos) ;
		} * /
		
		
		
		
		
		
		
		
		
		
		/* 
		stop();
		
		//-- Developer comments
		
		
		//-- Global Vars
		var userName:String = "";
		
		btnNext.buttonMode = true;
		btnNext.mouseChildren=false;
		
		
		
		//-- Imports and declarations
		import flash.events.KeyboardEvent;
		stage.focus = txtUsername;
		txtUsername.text = "";
		this.btnNext.alpha = 0.5;
		this.btnNext.mouseEnabled = false;
		
		
		//-- Functions
		function funcPlay(e:MouseEvent){
			userName = txtUsername.text;
			if (this.btnNext.mouseEnabled === true){
				play();
			}
			else{
				trace("Tell us your name please.");
			}
		}
		
		function f(e:KeyboardEvent):void{
			userName = txtUsername.text;
			trace("User's name': " + userName);
			if (userName === ""){
				this.btnNext.alpha = 0.5;
				this.btnNext.mouseEnabled = false;
			}
			else{
				this.btnNext.alpha = 1;
				this.btnNext.mouseEnabled = true;
			}
		}
		
		
		
		//-- Event Listeners
		btnNext.addEventListener(MouseEvent.CLICK, funcPlay); 
		
		stage.addEventListener(KeyboardEvent.KEY_DOWN,f);
		
		trace("User Name Test: " + userName);
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		//     this.btnContinue.cursor = 'pointer';
		
		                                                                                                                                                                                                              
		//username = document.getElementByID("input_YourName").value;  //get the text from the inputfield
		//alert("Value is " + username);
		
		//document.getElementById("input_YourName").focus();
	}
	this.frame_19 = function() {
		this.stop();
		
		alert("End reached");
		
		/* 
		
		//-- Developer comments
		
		
		//-- Global Vars
		var userType:String = "";
		
		tr_5_hiUser.text = "Hi, " + userName + "!";
		//tr_5_inorderfor.text = "var here";
		//tr_5_pleaseselect.text = "var here";
		
		btn_userType1.buttonMode = true;
		btn_userType2.buttonMode = true;
		btnNext.buttonMode = true;
		
		btn_userType1.mouseChildren = false;
		btn_userType2.mouseChildren = false;
		btnNext.mouseChildren = false;
		
		
		
		
		
		
		//-- Functions
		function userType_Refresh(){
			btn_userType1.setLabel("Crushing Mill User");
			btn_userType1.setDesc("Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo.");
		
			btn_userType2.setLabel("Refinery User");
			btn_userType2.setDesc("Ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tem por. etur adipiscing elit, sed do eiusmo.");
			if (userType === ""){
				this.btnNext.alpha = 0.5;
				this.btnNext.mouseEnabled = false;
			}
			else{
				this.btnNext.alpha = 1;
				this.btnNext.mouseEnabled = true;
			}
		}
		userType_Refresh();
		
		function funcContinue(e:MouseEvent){
			trace(userName + " is a " + userType);
			play();
		}
		
		function sel_userType1(e:MouseEvent){
			userType = "Crushing Mill User";	
			btn_userType1.gotoAndStop(4); //-- selected
			btn_userType2.gotoAndStop(1);
			trace("User selected: " + userType);
			userType_Refresh();
		}
		
		function sel_userType2(e:MouseEvent){
			userType = "Refinery User";	
			btn_userType1.gotoAndStop(1); 
			btn_userType2.gotoAndStop(4); //-- selected
			trace("User selected: " + userType);
			userType_Refresh();
		}
		
		
		
		
		
		//-- Event Listeners
		btnNext.addEventListener(MouseEvent.CLICK, funcContinue); 
		
		btn_userType1.addEventListener(MouseEvent.CLICK, sel_userType1); 
		btn_userType2.addEventListener(MouseEvent.CLICK, sel_userType2); 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// Layer_1
	this.txt_output = new cjs.Text("_", "18px 'Helvetica Neue'", "#999999");
	this.txt_output.name = "txt_output";
	this.txt_output.lineHeight = 23;
	this.txt_output.lineWidth = 963;
	this.txt_output.parent = this;
	this.txt_output.setTransform(32,666);

	this.txt_lang_head = new cjs.Text("Select Language", "58px 'Helvetica Neue'", "#333333");
	this.txt_lang_head.name = "txt_lang_head";
	this.txt_lang_head.textAlign = "center";
	this.txt_lang_head.lineHeight = 70;
	this.txt_lang_head.lineWidth = 958;
	this.txt_lang_head.parent = this;
	this.txt_lang_head.setTransform(512.45,148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_lang_head},{t:this.txt_output}]}).to({state:[]},4).wait(16));

	// btnStart
	this.btnGo = new lib.btn_SelectLanguage();
	this.btnGo.name = "btnGo";
	this.btnGo.setTransform(512,585.45,0.7312,0.7312);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnGo).to({_off:true},4).wait(16));

	// btn_lang01
	this.btn_lang01 = new lib.btn_Language();
	this.btn_lang01.name = "btn_lang01";
	this.btn_lang01.setTransform(362.55,384,0.5872,0.5869,0,0,0,218,64);

	this.timeline.addTween(cjs.Tween.get(this.btn_lang01).to({_off:true},4).wait(16));

	// btn_lang02
	this.btn_lang02 = new lib.btn_Language();
	this.btn_lang02.name = "btn_lang02";
	this.btn_lang02.setTransform(661.5,384.05,0.5873,0.5872,0,0,0,218,64);

	this.timeline.addTween(cjs.Tween.get(this.btn_lang02).to({_off:true},4).wait(16));

	// btnStarter
	this.btnStart = new lib.btnWelcomeMC();
	this.btnStart.name = "btnStart";
	this.btnStart.setTransform(512.1,548.05,0.5897,0.5897,0,0,0,0,0.1);
	this.btnStart._off = true;
	new cjs.ButtonHelper(this.btnStart, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).wait(4).to({_off:false},0).to({_off:true},5).wait(11));

	// tr_2_training
	this.tr_2_training = new cjs.Text("TRAINING COURSE", "bold 88px 'Helvetica Neue'", "#333333");
	this.tr_2_training.name = "tr_2_training";
	this.tr_2_training.textAlign = "center";
	this.tr_2_training.lineHeight = 107;
	this.tr_2_training.lineWidth = 1020;
	this.tr_2_training.parent = this;
	this.tr_2_training.setTransform(513,308.05);
	this.tr_2_training._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tr_2_training).wait(4).to({_off:false},0).to({_off:true},5).wait(11));

	// tr_2_welcome
	this.tr_2_welcome = new cjs.Text("Welcome to", "48px 'Helvetica Neue'", "#666666");
	this.tr_2_welcome.name = "tr_2_welcome";
	this.tr_2_welcome.textAlign = "center";
	this.tr_2_welcome.lineHeight = 59;
	this.tr_2_welcome.lineWidth = 1020;
	this.tr_2_welcome.parent = this;
	this.tr_2_welcome.setTransform(513,165.5);
	this.tr_2_welcome._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tr_2_welcome).wait(4).to({_off:false},0).to({_off:true},5).wait(11));

	// Contamination_Results_Portal
	this.text = new cjs.Text("Contamination Results Portal", "58px 'Helvetica Neue'", "#466D0E");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 1020;
	this.text.parent = this;
	this.text.setTransform(513,229);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({_off:false},0).to({_off:true},5).wait(11));

	// accent
	this.instance = new lib.accent();
	this.instance.setTransform(58.1,697.5,1,1,0,0,0,737.6,420.2);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},5).wait(11));

	// arrow_right_svg
	this.btnContinue = new lib.btn_continue_1();
	this.btnContinue.name = "btnContinue";
	this.btnContinue.setTransform(854.2,679.2,0.6631,0.6631,0,0,0,0.8,0.1);
	new cjs.ButtonHelper(this.btnContinue, 0, 1, 2);

	this.text_1 = new cjs.Text("I will be your guide for the whole training process.", "32px 'Helvetica Neue'", "#323232");
	this.text_1.lineHeight = 40;
	this.text_1.lineWidth = 693;
	this.text_1.parent = this;
	this.text_1.setTransform(502.7199,445.95,0.6631,0.6631);

	this.text_2 = new cjs.Text("Training Course!", "32px 'Helvetica Neue'");
	this.text_2.lineHeight = 40;
	this.text_2.lineWidth = 693;
	this.text_2.parent = this;
	this.text_2.setTransform(502.7199,396.9,0.6631,0.6631);

	this.text_3 = new cjs.Text("CONTAMINATION RESULTS PORTAL", "bold 32px 'Helvetica Neue'", "#006600");
	this.text_3.lineHeight = 40;
	this.text_3.lineWidth = 693;
	this.text_3.parent = this;
	this.text_3.setTransform(502.7199,365.3,0.6631,0.6631);

	this.text_4 = new cjs.Text("Welcome to the", "32px 'Helvetica Neue'", "#323232");
	this.text_4.lineHeight = 40;
	this.text_4.lineWidth = 693;
	this.text_4.parent = this;
	this.text_4.setTransform(502.7199,333.65,0.6631,0.6631);

	this.text_5 = new cjs.Text("Connie!", "bold 48px 'Helvetica Neue'", "#333333");
	this.text_5.lineHeight = 59;
	this.text_5.lineWidth = 624;
	this.text_5.parent = this;
	this.text_5.setTransform(502.7199,256.45,0.6631,0.6631);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(58.65,124.7,0.5,0.5);

	this.text_6 = new cjs.Text("Hello there!", "bold 68px 'Helvetica Neue'", "#333333");
	this.text_6.lineHeight = 83;
	this.text_6.lineWidth = 624;
	this.text_6.parent = this;
	this.text_6.setTransform(502.7199,156.2,0.6631,0.6631);

	this.text_7 = new cjs.Text("My name is", "32px 'Helvetica Neue'", "#323232");
	this.text_7.lineHeight = 40;
	this.text_7.lineWidth = 693;
	this.text_7.parent = this;
	this.text_7.setTransform(502.7199,228.8,0.6631,0.6631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.instance_1},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.btnContinue}]},9).to({state:[]},5).wait(6));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D2D44E").ss(8,1,1).p("EhrSg9KMDWlAAAQCgAAAACgMAAAB1VQAACgigAAMjWlAAAQigAAAAigMAAAh1VQAAigCgAAg");
	this.shape.setTransform(512.5322,383.0989,0.6988,0.9311);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("EhrSA9LQigAAAAigMAAAh1VQAAigCgAAMDWlAAAQCgAAAACgMAAAB1VQAACgigAAg");
	this.shape_1.setTransform(512.5322,383.0989,0.6988,0.9311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[]},5).wait(6));

	// input_YourName
	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/style.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(929,47.05,1,1,0,0,0,50,11);

	this.inputYourName = new lib.an_TextInput({'id': 'inputYourName', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inputYourName.name = "inputYourName";
	this.inputYourName.setTransform(735.15,397.1,4.4509,3.3984,0,0,0,50.1,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.inputYourName},{t:this.myCSS}]},14).to({state:[]},5).wait(1));

	// textbox
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33CC00").ss(4,1,1).p("Eg0QgLAMBohAAAQCgAAAACgIAARBQAACgigAAMhohAAAQigAAAAigIAAxBQAAigCgAAg");
	this.shape_2.setTransform(735.3086,395.9592,0.6653,0.6653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.008)").s().p("Eg0QALBQigAAAAigIAAxBQAAigCgAAMBohAAAQCgAAAACgIAARBQAACgigAAg");
	this.shape_3.setTransform(735.3086,395.9592,0.6653,0.6653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},14).to({state:[]},5).wait(1));

	// buttons
	this.btn_Next = new lib.btn_continue();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.setTransform(854.15,679.2,0.6523,0.6523,0,0,0,0.8,0.1);
	this.btn_Next._off = true;
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(14).to({_off:false},0).to({_off:true},5).wait(1));

	// mascot_pointing_svg
	this.text_8 = new cjs.Text("Please enter your name below:", "32px 'Helvetica Neue'", "#323232");
	this.text_8.lineHeight = 40;
	this.text_8.lineWidth = 750;
	this.text_8.parent = this;
	this.text_8.setTransform(503.5495,310.7,0.6653,0.6653);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(55.85,151.55,0.5,0.5);

	this.text_9 = new cjs.Text("Before we proceed, I would like to know  about you.", "32px 'Helvetica Neue'", "#323232");
	this.text_9.lineHeight = 40;
	this.text_9.lineWidth = 679;
	this.text_9.parent = this;
	this.text_9.setTransform(503.5495,193.35,0.6653,0.6653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_9},{t:this.instance_2},{t:this.text_8}]},14).to({state:[]},5).wait(1));

	// border
	this.text_10 = new cjs.Text("Test #15", "32px 'Helvetica Neue'", "#323232");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 40;
	this.text_10.lineWidth = 651;
	this.text_10.parent = this;
	this.text_10.setTransform(405.5,679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D2D44E").ss(8,1,1).p("EhrSg9KMDWlAAAQCgAAAACgMAAAB1VQAACgigAAMjWlAAAQigAAAAigMAAAh1VQAAigCgAAg");
	this.shape_4.setTransform(512.5322,383.0989,0.6988,0.9311);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("EhrSA9LQigAAAAigMAAAh1VQAAigCgAAMDWlAAAQCgAAAACgMAAAB1VQAACgigAAg");
	this.shape_5.setTransform(512.5322,383.0989,0.6988,0.9311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_10}]},14).to({state:[]},5).wait(1));

	// mascot_thumbsup_svg
	this.btn_userType2 = new lib.selUserType();
	this.btn_userType2.name = "btn_userType2";
	this.btn_userType2.setTransform(518.3,453.9,0.6523,0.6523,0,0,0,218,64);

	this.btn_userType1 = new lib.selUserType();
	this.btn_userType1.name = "btn_userType1";
	this.btn_userType1.setTransform(213.95,453.9,0.6523,0.6523,0,0,0,218,64);

	this.tr_5_pleaseselect = new cjs.Text("Please select the user type that best describes you:", "32px 'Helvetica Neue'", "#323232");
	this.tr_5_pleaseselect.name = "tr_5_pleaseselect";
	this.tr_5_pleaseselect.lineHeight = 40;
	this.tr_5_pleaseselect.lineWidth = 878;
	this.tr_5_pleaseselect.parent = this;
	this.tr_5_pleaseselect.setTransform(73.0795,226.25,0.6523,0.6523);

	this.tr_5_hiUser = new cjs.Text("Hi, Johnny!", "bold 68px 'Helvetica Neue'", "#333333");
	this.tr_5_hiUser.name = "tr_5_hiUser";
	this.tr_5_hiUser.lineHeight = 83;
	this.tr_5_hiUser.lineWidth = 1405;
	this.tr_5_hiUser.parent = this;
	this.tr_5_hiUser.setTransform(73.0795,74.95,0.6523,0.6523);

	this.tr_5_inorderfor = new cjs.Text("In order to launch the appropriate training scenarios for you, I need to know what type of user you are.", "32px 'Helvetica Neue'", "#323232");
	this.tr_5_inorderfor.name = "tr_5_inorderfor";
	this.tr_5_inorderfor.lineHeight = 40;
	this.tr_5_inorderfor.lineWidth = 880;
	this.tr_5_inorderfor.parent = this;
	this.tr_5_inorderfor.setTransform(73.0795,158.7108,0.6523,0.6523);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tr_5_inorderfor},{t:this.tr_5_hiUser},{t:this.tr_5_pleaseselect},{t:this.btn_userType1},{t:this.btn_userType2}]},19).wait(1));

	// btnNext
	this.btnNext = new lib.btn_continue();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(854.15,679.2,0.6523,0.6523,0,0,0,0.8,0.1);
	this.btnNext._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnNext).wait(19).to({_off:false},0).wait(1));

	// mascot
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(658.7,157.35,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1));

	// border
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D2D44E").ss(8,1,1).p("EhrSg9KMDWlAAAQCgAAAACgMAAAB1VQAACgigAAMjWlAAAQigAAAAigMAAAh1VQAAigCgAAg");
	this.shape_6.setTransform(512.1822,386.1489,0.6988,0.9311);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("EhrSA9LQigAAAAigMAAAh1VQAAigCgAAMDWlAAAQCgAAAACgMAAAB1VQAACgigAAg");
	this.shape_7.setTransform(512.1822,386.1489,0.6988,0.9311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,398.6,1192.5,718.9999999999999);
// library properties:
lib.properties = {
	id: '5621C1AA512A4D62B5AFE3F5F6B65173',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_CRP_training_atlas_1.png?1685441106654", id:"_CRP_training_atlas_1"},
		{src:"images/_CRP_training_atlas_2.png?1685441106654", id:"_CRP_training_atlas_2"},
		{src:"images/_CRP_training_atlas_3.png?1685441106654", id:"_CRP_training_atlas_3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1685441106915", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1685441106915", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1685441106915", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1685441106915", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5621C1AA512A4D62B5AFE3F5F6B65173'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;