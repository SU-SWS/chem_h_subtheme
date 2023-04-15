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
      const menuSearchButton = $('<button>', {class: 'menu-search-button', 'id': 'search-button-toggle', 'aria-expanded': 'false'}).html('');
      menuSearchButton.click(() => {
        menuSearchButton.attr('aria-expanded', menuSearchButton.attr('aria-expanded') === 'false');
        menuSearchButton.toggleClass('menu-search-button-expanded');
        $('#block-chem-h-subtheme-search form').toggleClass('show-form');
      })
      $('.su-multi-menu--dropdowns').append(menuSearchButton)
      $('.su-brand-bar,.su-masthead').wrapAll('<div class="fixed-header">');

    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
