	function Tracker() {
		this._id = null;
		this.enabled = true;
		this.disposed = false;	
	};


	Tracker.prototype.on = function(state, handler) {
		this[state] = handler;
		return this;
	};

	Tracker.prototype.onVisible = function(handler) {
		return this.on(_v.VISIBLE, handler);
	};

	Tracker.prototype.onHidden = function(handler) {
		return this.on(_v.HIDDEN, handler);
	};

	Tracker.prototype.enable = function() {
		this.enabled = true;
		return this;
	};

	Tracker.prototype.disable = function() {
		this.enabled = false;
		return this;
	};

	Tracker.prototype.dispose = function() {
		this.disposed = true;
		return this;
	};

	Tracker.prototype.drop = function() {
		_v._remove(this);
		return this;
	};

	Tracker.prototype.restore = function() {
		return _v._register(this);
	};