/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

 export default {

  // Attach Drupal Behavior.
  attach (context, settings) {
    // console.log("Attached.");

    (function ($) {
      const menuSearchButton = $('<button>', {class: 'menu-search-button', 'id': 'search-button-toggle', 'aria-expanded': 'false', 'aria-label': 'Expand search form'});
      menuSearchButton.click(() => {
        menuSearchButton.attr('aria-expanded', menuSearchButton.attr('aria-expanded') === 'false');
        menuSearchButton.attr('aria-label', menuSearchButton.attr('aria-label') == 'Expand search form' ? 'Collapse search form' : 'Expand search form');
        // menuSearchButton.text(menuSearchButton.text() === 'Expand search form' ? 'Collapse search form' : 'Expand search form');
        menuSearchButton.toggleClass('menu-search-button-expanded');
        $('#block-chem-h-subtheme-search form').toggleClass('show-form');
      });
      $('.su-multi-menu--dropdowns').append(menuSearchButton);
    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
