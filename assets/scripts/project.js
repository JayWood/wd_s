'use strict';

/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace('no-js', 'js');
'use strict';

/**
 * File modal.js
 *
 * Deal with multiple modals and their media.
 */
window.wdsModal = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.modal-trigger').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Trigger a modal to open.
		app.$c.body.on('click touchstart', '.modal-trigger', app.openModal);

		// Trigger the close button to close the modal.
		app.$c.body.on('click touchstart', '.close', app.closeModal);

		// Allow the user to close the modal by hitting the esc key.
		app.$c.body.on('keydown', app.escKeyClose);

		// Allow the user to close the modal by clicking outside of the modal.
		app.$c.body.on('click touchstart', 'div.modal-open', app.closeModalByClick);
	};

	// Open the modal.
	app.openModal = function () {
		// Figure out which modal we're opening and store the object.
		var $modal = $($(this).data('target'));

		// Display the modal.
		$modal.addClass('modal-open');

		// Add body class.
		app.$c.body.addClass('modal-open');
	};

	// Close the modal.
	app.closeModal = function () {
		// Figure the opened modal we're closing and store the object.
		var $modal = $($('div.modal-open .close').data('target'));

		// Find the iframe in the $modal object.
		var $iframe = $modal.find('iframe');

		// Get the iframe src URL.
		var url = $iframe.attr('src');

		// Remove the source URL, then add it back, so the video can be played again later.
		$iframe.attr('src', '').attr('src', url);

		// Finally, hide the modal.
		$modal.removeClass('modal-open');

		// Remove the body class.
		app.$c.body.removeClass('modal-open');
	};

	// Close if "esc" key is pressed.
	app.escKeyClose = function (event) {
		if (27 === event.keyCode) {
			app.closeModal();
		}
	};

	// Close if the user clicks outside of the modal
	app.closeModalByClick = function (event) {
		// If the parent container is NOT the modal dialog container, close the modal
		if (!$(event.target).parents('div').hasClass('modal-dialog')) {
			app.closeModal();
		}
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsModal);
'use strict';

/**
 * File search.js
 *
 * Deal with the search form.
 */
window.wdsSearch = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.search-field').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Remove placeholder text from search field on focus.
		app.$c.body.on('focus', '.search-field', app.removePlaceholderText);

		// Add placeholder text back to search field on blur.
		app.$c.body.on('blur', '.search-field', app.addPlaceholderText);
	};

	// Remove placeholder text from search field.
	app.removePlaceholderText = function () {
		var $search_field = $(this);

		$search_field.data('placeholder', $search_field.attr('placeholder')).attr('placeholder', '');
	};

	// Replace placeholder text from search field.
	app.addPlaceholderText = function () {
		var $search_field = $(this);

		$search_field.attr('placeholder', $search_field.data('placeholder')).data('placeholder', '');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsSearch);
'use strict';

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
	    isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
	    isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

	if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();
'use strict';

/**
 * File window-ready.js
 *
 * Add a "ready" class to <body> when window is ready.
 */
window.wdsWindowReady = {};
(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.bindEvents();
	};

	// Cache document elements.
	app.cache = function () {
		app.$c = {
			'window': $(window),
			'body': $(document.body)
		};
	};

	// Combine all events.
	app.bindEvents = function () {
		app.$c.window.load(app.addBodyClass);
	};

	// Add a class to <body>.
	app.addBodyClass = function () {
		app.$c.body.addClass('ready');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsWindowReady);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWVuYWJsZWQuanMiLCJtb2RhbC5qcyIsInNlYXJjaC5qcyIsInNraXAtbGluay1mb2N1cy1maXguanMiLCJ3aW5kb3ctcmVhZHkuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsIndpbmRvdyIsIndkc01vZGFsIiwiJCIsImFwcCIsImluaXQiLCJjYWNoZSIsIm1lZXRzUmVxdWlyZW1lbnRzIiwiYmluZEV2ZW50cyIsIiRjIiwibGVuZ3RoIiwib24iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZXNjS2V5Q2xvc2UiLCJjbG9zZU1vZGFsQnlDbGljayIsIiRtb2RhbCIsImRhdGEiLCJhZGRDbGFzcyIsIiRpZnJhbWUiLCJmaW5kIiwidXJsIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiZXZlbnQiLCJrZXlDb2RlIiwidGFyZ2V0IiwicGFyZW50cyIsImhhc0NsYXNzIiwialF1ZXJ5Iiwid2RzU2VhcmNoIiwicmVtb3ZlUGxhY2Vob2xkZXJUZXh0IiwiYWRkUGxhY2Vob2xkZXJUZXh0IiwiJHNlYXJjaF9maWVsZCIsImlzV2Via2l0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaXNPcGVyYSIsImlzSWUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVsZW1lbnQiLCJ0ZXN0IiwidGFnTmFtZSIsInRhYkluZGV4IiwiZm9jdXMiLCJ3ZHNXaW5kb3dSZWFkeSIsImxvYWQiLCJhZGRCb2R5Q2xhc3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7O0FBS0FBLFNBQVNDLElBQVQsQ0FBY0MsU0FBZCxHQUEwQkYsU0FBU0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxPQUF4QixDQUFpQyxPQUFqQyxFQUEwQyxJQUExQyxDQUExQjs7O0FDTEE7Ozs7O0FBS0FDLE9BQU9DLFFBQVAsR0FB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QUFrQkE7QUFDRCxDQXpCRDs7O0FDUEE7Ozs7O0FBS0FsRCxPQUFPbUQsY0FBUCxHQUF3QixFQUF4QjtBQUNBLENBQUUsVUFBV25ELE1BQVgsRUFBbUJFLENBQW5CLEVBQXNCQyxHQUF0QixFQUE0QjtBQUM3QjtBQUNBQSxLQUFJQyxJQUFKLEdBQVcsWUFBWTtBQUN0QkQsTUFBSUUsS0FBSjtBQUNBRixNQUFJSSxVQUFKO0FBQ0EsRUFIRDs7QUFLQTtBQUNBSixLQUFJRSxLQUFKLEdBQVksWUFBWTtBQUN2QkYsTUFBSUssRUFBSixHQUFTO0FBQ1IsYUFBVU4sRUFBR0YsTUFBSCxDQURGO0FBRVIsV0FBUUUsRUFBR04sU0FBU0MsSUFBWjtBQUZBLEdBQVQ7QUFJQSxFQUxEOztBQU9BO0FBQ0FNLEtBQUlJLFVBQUosR0FBaUIsWUFBWTtBQUM1QkosTUFBSUssRUFBSixDQUFPUixNQUFQLENBQWNvRCxJQUFkLENBQW9CakQsSUFBSWtELFlBQXhCO0FBQ0EsRUFGRDs7QUFJQTtBQUNBbEQsS0FBSWtELFlBQUosR0FBbUIsWUFBWTtBQUM5QmxELE1BQUlLLEVBQUosQ0FBT1gsSUFBUCxDQUFZb0IsUUFBWixDQUFzQixPQUF0QjtBQUNBLEVBRkQ7O0FBSUE7QUFDQWYsR0FBR0MsSUFBSUMsSUFBUDtBQUNBLENBM0JELEVBMkJLSixNQTNCTCxFQTJCYTRCLE1BM0JiLEVBMkJxQjVCLE9BQU9tRCxjQTNCNUIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBqcy1lbmFibGVkLmpzXG4gKlxuICogSWYgSmF2YXNjcmlwdCBpcyBlbmFibGVkLCByZXBsYWNlIHRoZSA8Ym9keT4gY2xhc3MgXCJuby1qc1wiLlxuICovXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoICduby1qcycsICdqcycgKTtcbiIsIi8qKlxuICogRmlsZSBtb2RhbC5qc1xuICpcbiAqIERlYWwgd2l0aCBtdWx0aXBsZSBtb2RhbHMgYW5kIHRoZWlyIG1lZGlhLlxuICovXG53aW5kb3cud2RzTW9kYWwgPSB7fTtcblxuKCBmdW5jdGlvbiAoIHdpbmRvdywgJCwgYXBwICkge1xuXHQvLyBDb25zdHJ1Y3Rvci5cblx0YXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHQnYm9keSc6ICQoICdib2R5JyApXG5cdFx0fTtcblx0fTtcblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdGFwcC5tZWV0c1JlcXVpcmVtZW50cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJCggJy5tb2RhbC10cmlnZ2VyJyApLmxlbmd0aDtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIFRyaWdnZXIgYSBtb2RhbCB0byBvcGVuLlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAnY2xpY2sgdG91Y2hzdGFydCcsICcubW9kYWwtdHJpZ2dlcicsIGFwcC5vcGVuTW9kYWwgKTtcblxuXHRcdC8vIFRyaWdnZXIgdGhlIGNsb3NlIGJ1dHRvbiB0byBjbG9zZSB0aGUgbW9kYWwuXG5cdFx0YXBwLiRjLmJvZHkub24oICdjbGljayB0b3VjaHN0YXJ0JywgJy5jbG9zZScsIGFwcC5jbG9zZU1vZGFsICk7XG5cblx0XHQvLyBBbGxvdyB0aGUgdXNlciB0byBjbG9zZSB0aGUgbW9kYWwgYnkgaGl0dGluZyB0aGUgZXNjIGtleS5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2tleWRvd24nLCBhcHAuZXNjS2V5Q2xvc2UgKTtcblxuXHRcdC8vIEFsbG93IHRoZSB1c2VyIHRvIGNsb3NlIHRoZSBtb2RhbCBieSBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBtb2RhbC5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2NsaWNrIHRvdWNoc3RhcnQnLCAnZGl2Lm1vZGFsLW9wZW4nLCBhcHAuY2xvc2VNb2RhbEJ5Q2xpY2sgKTtcblx0fTtcblxuXHQvLyBPcGVuIHRoZSBtb2RhbC5cblx0YXBwLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBGaWd1cmUgb3V0IHdoaWNoIG1vZGFsIHdlJ3JlIG9wZW5pbmcgYW5kIHN0b3JlIHRoZSBvYmplY3QuXG5cdFx0dmFyICRtb2RhbCA9ICQoICQoIHRoaXMgKS5kYXRhKCAndGFyZ2V0JyApICk7XG5cblx0XHQvLyBEaXNwbGF5IHRoZSBtb2RhbC5cblx0XHQkbW9kYWwuYWRkQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXG5cdFx0Ly8gQWRkIGJvZHkgY2xhc3MuXG5cdFx0YXBwLiRjLmJvZHkuYWRkQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXHR9O1xuXG5cdC8vIENsb3NlIHRoZSBtb2RhbC5cblx0YXBwLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gRmlndXJlIHRoZSBvcGVuZWQgbW9kYWwgd2UncmUgY2xvc2luZyBhbmQgc3RvcmUgdGhlIG9iamVjdC5cblx0XHR2YXIgJG1vZGFsID0gJCggJCggJ2Rpdi5tb2RhbC1vcGVuIC5jbG9zZScgKS5kYXRhKCAndGFyZ2V0JyApICk7XG5cblx0XHQvLyBGaW5kIHRoZSBpZnJhbWUgaW4gdGhlICRtb2RhbCBvYmplY3QuXG5cdFx0dmFyICRpZnJhbWUgPSAkbW9kYWwuZmluZCggJ2lmcmFtZScgKTtcblxuXHRcdC8vIEdldCB0aGUgaWZyYW1lIHNyYyBVUkwuXG5cdFx0dmFyIHVybCA9ICRpZnJhbWUuYXR0ciggJ3NyYycgKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgc291cmNlIFVSTCwgdGhlbiBhZGQgaXQgYmFjaywgc28gdGhlIHZpZGVvIGNhbiBiZSBwbGF5ZWQgYWdhaW4gbGF0ZXIuXG5cdFx0JGlmcmFtZS5hdHRyKCAnc3JjJywgJycgKS5hdHRyKCAnc3JjJywgdXJsICk7XG5cblx0XHQvLyBGaW5hbGx5LCBoaWRlIHRoZSBtb2RhbC5cblx0XHQkbW9kYWwucmVtb3ZlQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBib2R5IGNsYXNzLlxuXHRcdGFwcC4kYy5ib2R5LnJlbW92ZUNsYXNzKCAnbW9kYWwtb3BlbicgKTtcblx0fTtcblxuXHQvLyBDbG9zZSBpZiBcImVzY1wiIGtleSBpcyBwcmVzc2VkLlxuXHRhcHAuZXNjS2V5Q2xvc2UgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdGlmICggMjcgPT09IGV2ZW50LmtleUNvZGUgKSB7XG5cdFx0XHRhcHAuY2xvc2VNb2RhbCgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbG9zZSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWxcblx0YXBwLmNsb3NlTW9kYWxCeUNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGNvbnRhaW5lciBpcyBOT1QgdGhlIG1vZGFsIGRpYWxvZyBjb250YWluZXIsIGNsb3NlIHRoZSBtb2RhbFxuXHRcdGlmICggISQoIGV2ZW50LnRhcmdldCApLnBhcmVudHMoICdkaXYnICkuaGFzQ2xhc3MoICdtb2RhbC1kaWFsb2cnICkgKSB7XG5cdFx0XHRhcHAuY2xvc2VNb2RhbCgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cud2RzTW9kYWwgKTtcbiIsIi8qKlxuICogRmlsZSBzZWFyY2guanNcbiAqXG4gKiBEZWFsIHdpdGggdGhlIHNlYXJjaCBmb3JtLlxuICovXG53aW5kb3cud2RzU2VhcmNoID0ge307XG5cbiggZnVuY3Rpb24gKCB3aW5kb3csICQsIGFwcCApIHtcblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5jYWNoZSgpO1xuXG5cdFx0aWYgKCBhcHAubWVldHNSZXF1aXJlbWVudHMoKSApIHtcblx0XHRcdGFwcC5iaW5kRXZlbnRzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhY2hlIGFsbCB0aGUgdGhpbmdzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0J2JvZHknOiAkKCAnYm9keScgKVxuXHRcdH07XG5cdH07XG5cblx0Ly8gRG8gd2UgbWVldCB0aGUgcmVxdWlyZW1lbnRzP1xuXHRhcHAubWVldHNSZXF1aXJlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICQoICcuc2VhcmNoLWZpZWxkJyApLmxlbmd0aDtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIFJlbW92ZSBwbGFjZWhvbGRlciB0ZXh0IGZyb20gc2VhcmNoIGZpZWxkIG9uIGZvY3VzLlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAnZm9jdXMnLCAnLnNlYXJjaC1maWVsZCcsIGFwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgKTtcblxuXHRcdC8vIEFkZCBwbGFjZWhvbGRlciB0ZXh0IGJhY2sgdG8gc2VhcmNoIGZpZWxkIG9uIGJsdXIuXG5cdFx0YXBwLiRjLmJvZHkub24oICdibHVyJywgJy5zZWFyY2gtZmllbGQnLCBhcHAuYWRkUGxhY2Vob2xkZXJUZXh0ICk7XG5cdH07XG5cblx0Ly8gUmVtb3ZlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdGFwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cblx0XHQkc2VhcmNoX2ZpZWxkLmRhdGEoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuYXR0ciggJ3BsYWNlaG9sZGVyJyApICkuYXR0ciggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0fTtcblxuXHQvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdGFwcC5hZGRQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cblx0XHQkc2VhcmNoX2ZpZWxkLmF0dHIoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuZGF0YSggJ3BsYWNlaG9sZGVyJyApICkuZGF0YSggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cud2RzU2VhcmNoICk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpc1dlYmtpdCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnd2Via2l0JyApID4gLTEsXG5cdFx0aXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgPiAtMSxcblx0XHRpc0llID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApID4gLTE7XG5cblx0aWYgKCAoIGlzV2Via2l0IHx8IGlzT3BlcmEgfHwgaXNJZSApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISggL15bQS16MC05Xy1dKyQvICkudGVzdCggaWQgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kgKS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSApKCk7XG4iLCIvKipcbiAqIEZpbGUgd2luZG93LXJlYWR5LmpzXG4gKlxuICogQWRkIGEgXCJyZWFkeVwiIGNsYXNzIHRvIDxib2R5PiB3aGVuIHdpbmRvdyBpcyByZWFkeS5cbiAqL1xud2luZG93Lndkc1dpbmRvd1JlYWR5ID0ge307XG4oIGZ1bmN0aW9uICggd2luZG93LCAkLCBhcHAgKSB7XG5cdC8vIENvbnN0cnVjdG9yLlxuXHRhcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuY2FjaGUoKTtcblx0XHRhcHAuYmluZEV2ZW50cygpO1xuXHR9O1xuXG5cdC8vIENhY2hlIGRvY3VtZW50IGVsZW1lbnRzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0J3dpbmRvdyc6ICQoIHdpbmRvdyApLFxuXHRcdFx0J2JvZHknOiAkKCBkb2N1bWVudC5ib2R5IClcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjLndpbmRvdy5sb2FkKCBhcHAuYWRkQm9keUNsYXNzICk7XG5cdH07XG5cblx0Ly8gQWRkIGEgY2xhc3MgdG8gPGJvZHk+LlxuXHRhcHAuYWRkQm9keUNsYXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC4kYy5ib2R5LmFkZENsYXNzKCAncmVhZHknICk7XG5cdH07XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCBhcHAuaW5pdCApO1xufSApKCB3aW5kb3csIGpRdWVyeSwgd2luZG93Lndkc1dpbmRvd1JlYWR5ICk7XG4iXX0=