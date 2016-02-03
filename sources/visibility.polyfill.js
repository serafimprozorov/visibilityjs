(function(namespace) {
	var _d = document || {};
	var _v = namespace.Visibility;
	var _bind = _d.addEventListener || _d.attachEvent;


	_v.polyfill = {
		use: function() {
			var result = true;

			if (_v._ready
				return result;

			_d.hidden = false;
			_d.visibilityState = _v.VISIBLE;

			var evt = null;

			if (_d.createEvent !== 'undefined' && _d.dispatchEvent !== 'undefined') {
				evt = _d.createEvent('HTMLEvents');
				evt.initEvent('visibilitychange');
			} else {
				result = false;
			}

			function _invoke() {
				if (evt) {
					_d.dispatchEvent(evt);
				} else {
					_v._changed.call(_v, _evt);
				}
			};

			_bind('focus', function(evt) { 
				_d.hidden = false;
				_d.visibilityState = _v.VISIBLE;
				_invoke();
			});

			_bind('blur', function(evt) {
				_d.hidden = false;
				_d.visibilityState = _v.HIDDEN;
				_invoke();
			});

			return result;
		}
	};
})(this);