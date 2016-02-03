Date.prototype._z = function(num) {
	return num < 10 ? '0' + num : num;
};

Date.prototype.format = function() {
	// Unsupported in IE
	//return `${this._z(this.getDate())}.${this._z(this.getMonth() + 1)}.${this.getYear()} ${this._z(this.getHours())}:${this._z(this.getMinutes())}:${this._z(this.getSeconds())}`;
	return this._z(this.getDate()) + '.'
		 + this._z(this.getMonth() + 1) + '.'
		 + this.getYear() + ' '
		 + this._z(this.getHours()) + ':'
		 + this._z(this.getMinutes()) + ':' 
		 + this._z(this.getSeconds());
}

HTMLElement.prototype.appendFirst = function(el) {
	if (!el) return;

	if (this.firstChild) {
		this.insertBefore(el, this.firstChild)
	} else {
		this.appendChild(el);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	var log = function(evt, date) {
		var entry = document.createElement('div');
		entry.className = 'log_' + evt;
		entry.textContent = evt + ': ' + date.format();

		document.getElementById('log').appendFirst(entry);
	};

	Visibility.trackWith(
		Tracker.new()
			.on(Visibility.HIDDEN, function() {
				log(Visibility.HIDDEN, new Date());
			})
			.on(Visibility.VISIBLE, function() {
				log(Visibility.VISIBLE, new Date());
			}));

	Visibility.run();
});