(function(namespace) {
	// --------------- Visibility definition ----------------------------------------

	var Visibility = {
		run: function() {
			_bindEventHandler.call(_d, _eventName, _onChange);
		},

		stop: function() {
			_unbindEventHandler(_eventName, _onChange);
		},

		trackWith: function(tracker) {
			var id = _nextTrackerID++;

			_trackers[id] = tracker;

			return id;
		},

		remove: function(id) {
			_use(id, function() { _remove(id); });
		},

		disable: function(id) {
			_use(id, function(t) { t.enabled = false; });
		},

		enable: function(id) {
			_use(id, function(t) { t.enabled = false; });
		},
		

		HIDDEN: 'hidden',
		
		VISIBLE: 'visible',
		
		PRERENDER: 'prerender',
		
		UNLOADED: 'unloaded'
	};

	// --------------------------------------------------------------------------


	// ----------- Tracker definition -------------------------------------------

	Tracker = function() {
		this.enabled = true;
	} 

	Tracker.new = function() {
		return new Tracker();
	}

	Tracker.prototype.on = function(event, handler) {
		this[event] = handler;
		return this;
	};
	
	Tracker.prototype.disabled = function() {
		this.enabled = false;
		return this;
	};
	
	Tracker.prototype.disposable = function() {
		this.remove = true;
		return this;
	};

	// --------------------------------------------------------------------------


	// ----------- Private functions --------------------------------------------

	function _onChange(evt) {
		var state = _d[_propertyName];

		for (id in _trackers) {
			var tracker = _trackers[id]

			if (!tracker || !tracker.enabled)
				continue;

			var handler = tracker[state];

			if (!handler)
				continue;

			handler(evt);

			if (tracker.remove) {
				_remove(id);
			}
		}
	};

	function _use(id, action) {
		var tracker = _trackers[id];

		if (tracker) {
			action(tracker);
		} else {
			// log
		}
	};

	function _remove(id) {
		delete _trackers[id];
	};

	// --------------------------------------------------------------------------


	// ------------------ Initialization ----------------------------------------

	var _d = document || {};
	var _bindEventHandler = _d.addEventListener || _d.attachEvent;
	var _unbindEventHandler = _d.removeEventListener || _d.detachEvent;
	var _trackers = {};
	var _nextTrackerID = 0;

	var _propertyName = 'visibilityState';
	var _eventName = 'webkitvisibilitychange';

	if (typeof _d[_propertyName] === 'undefined') {
		_propertyName = null;
		
		var prefixes = ['moz', 'webkit', 'o', 'ms'];

		for (var i = 0; i < prefixes.length; ++i) {
			var property = prefixes[i] + 'VisibilityState';
		
			if (typeof _d[property] === 'undefined')
				continue
		
			_propertyName = property;
			_eventName = prefixes[i] + _eventName;
		}
	}

	// --------------------------------------------------------------------------


	// ---------------- Registering ---------------------------------------------

	namespace.Visibility = Visibility;
	namespace.Tracker = Tracker;

	// --------------------------------------------------------------------------
})(this);