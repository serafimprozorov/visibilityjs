(function(namespace){
	var _v = namespace.Visibility;


	_v.track = function() {
		return _v._register(new Tracker());
	};

	_v.global = function(handler) {
		return _v.register(new Global(handler), true);
	};

	_v.hidden = function() {
		return _d.hidden;
	};

	_v.state = function() {
		return _d[_propertyName];
	};


	_v._onchange = function(evt) {
		_run(evt, _globals, 'handler');
		_run(evt. _trackers, _d[_propertyName]);
	};

	_v._register = function(subject, isGlobal) {
		var id = isGlobal ? _nextGlobalID++ : _nextTrackerID++;
		
		subject._id = id;
		(isGlobal ? _globals : _trackers)[id] = subject;

		return subject;
	};

	_v._remove = function(subject) {
		delete (subject.onevent ? _globals : _trackers)[subject._id];
	};	


	function _run(evt, subjects, function) {
		for (var id in subjects) {
			var subject = subjects[id];

			if (!subject || !subject.enabled)
				continue;

			if (subject.disposed) {
				_v._remove(subject);
			}

			var handler = subject[function];

			if (!handler)
				continue;

			handler(evt);
		}
	};


})(this);

	function _init() {
		var propertyName = 'VisibilityState';

		if (typeof _d[_propertyName] === 'undefined') {
			_propertyName = null;

			var prefixes = ['moz', 'webkit', 'o', 'ms'];

			for (var i = 0; i < prefixes.length; ++i) {
				if (typeof _d[prefixes[i] + propertyName] === 'undefined')
					continue;
		
				_propertyName = prefixes[i] + propertyName;
				_eventName = prefixes[i] + _eventName;
			}
		}

		if (Visibility.polyfill.use()) {
			_propertyName = 'visibilityState';
			_bind(_eventName, Visibility._onChange);
		}
	};

// ---------------------------------------------------------------

// ------- Initialization ----------------------------------------

	var _d = document || {};
	var _trackers = {};
	var _nextTrackerID = 0;
	var _propertyName = 'visibilityState';
	var _eventName = 'visibilitychange';
	var _bind = _d.addEventListener || _d.attachEvent;


	_init();

})(this);
/*
 - Package managers support;
 - Modularity support;
 - libraries and frameworks integration
 !!- Refactor Tracker prototype;
 !! - Extensions
*/