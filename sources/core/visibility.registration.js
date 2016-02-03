// Just registering our module 

(function(namespace) {
	namespace.Visibility = {
		HIDDEN: 'hidden',
		VISIBLE: 'visible',
		PRERENDER: 'prerender',
		UNLOADED: 'unloaded',

		_ready: false;
	};
})(this);