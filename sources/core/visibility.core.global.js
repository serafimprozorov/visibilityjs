function Global(handler) {
	this.enabled = true;
	this.disposed = false;
	this.handler = handler;	
};


Global.prototype.onevent = function(handler) {
	this.handler = handler;
};

Global.prototype.enable = function() {
	this.enabled = true;
};

Global.prototype.disable = function() {
	this.enabled = false;
};

Global.prototype.dispose = function() {
	this.disposed = true;
};

Global.prototype.drop = function() {
	_v._remove()
};

Global.prototype.restore = function() {

};