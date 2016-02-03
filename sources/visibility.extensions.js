(function(namespace) {
	var _d = document || {};
	var _v = namespace.Visibility;


// ------------ Tracker registration ------------------------

	_v.on = function(state, handler, disposable) {
		var track = { disposable: disposable };
		track[state] = handler;

		return _v.track(track);
	};

	_v.once = function(state, handler) {
		return _v.on(state, handler, true);
	};

	_v.onVisible = function(handler, disposable) {
		return _v.on(_v.VISIBLE, handler, disposable);
	};

	_v.onceVisible = function(handler) {
		return _v.onVisible(handler, true);
	};

	_v.onHidden = function(handler, disposable) {
		return _v.on(_v.HIDDEN, handler, disposable);
	};

	_v.onceHidden = function(handler) {
		return _v.onHidden(handler, true);
	};

// ----------------------------------------------------------


// ---------------- Runners ---------------------------------

	

// ----------------------------------------------------------
})(this);