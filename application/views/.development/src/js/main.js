
function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


(function($){

	window.App = window.App || {};
	App.Widgets = App.Widgets || {};

	var Application = can.Control.extend(
		{
		},
		{
			init: function () {
			},

			bootstrap: function () {
				var method;

				for (method in this) {
					if (method.length > 4 && method.substr(0, 4) === 'init') {
						this[method]();
					}
				}

				can.route.ready();
			},

			installController: function (selector, controllerName, settings) {
				settings = settings || {};
				return this.element.find(selector)[controllerName](settings).control(controllerName);
			}

        }
    );

    $(function () {
        window.application = new Application('body');
        window.application.bootstrap();
    });

}(jQuery));