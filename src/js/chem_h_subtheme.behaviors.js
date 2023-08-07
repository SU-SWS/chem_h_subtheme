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
      const form = $('#block-chem-h-subtheme-search', context).detach();
      const menuSearchButton = $('<button>', {class: 'menu-search-button', 'id': 'search-button-toggle', 'aria-expanded': 'false', 'aria-label': 'Expand search form'});
      menuSearchButton.click(() => {
        menuSearchButton.attr('aria-expanded', menuSearchButton.attr('aria-expanded') === 'false');
        menuSearchButton.attr('aria-label', menuSearchButton.attr('aria-label') == 'Expand search form' ? 'Collapse search form' : 'Expand search form');
        menuSearchButton.toggleClass('menu-search-button-expanded');
        form.find('form').toggleClass('show-form');
        if (form.find('form').hasClass('show-form')) form.find('.su-site-search__input').focus();
      });
      $('.su-multi-menu--dropdowns', context).append(menuSearchButton).closest('header').append(form);

      // add search key to search results page input
      let queryParam = new URLSearchParams(window.location.search);
      const searchResultsForm = $('#block-chem-h-subtheme-search-form .su-site-search__input');
      searchResultsForm.val(queryParam.get('key'));

      // Person node header profile button
      $('.su-quote__bio', context).append($('.su-person-profile-link', context).detach());

      // Square image for Person lists
      $('.stanford-people-grid img', context).each(function(){
        $(this).first().attr('src', $(this).first().attr('src').replace(/styles\/.*\/public/g, 'styles/large_square/public')).removeAttr('height width');
      })
    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
