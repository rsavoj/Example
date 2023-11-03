/* main.css */

/* avoid using load event unless purposeful as it waits until all external assets have loaded */
window.addEventListener('DOMContentLoaded', init);

/**
 * init - Set up the page, binding event handlers and running initial page load activities.
 */
function init() {
	console.log(`JavaScript is active on ${new Date()}`);
}
