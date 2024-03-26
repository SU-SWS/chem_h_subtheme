(function ($) {
  'use strict';
  Drupal.behaviors.chemHSubtheme = {
    attach: function (context, settings) {
      const form = $('#block-chem-h-subtheme-search', context).detach();
      const menuSearchButton = $('<button>', { class: 'menu-search-button', 'id': 'search-button-toggle', 'aria-expanded': 'false', 'aria-label': 'Expand search form' });
      menuSearchButton.click(() => {
        menuSearchButton.attr('aria-expanded', menuSearchButton.attr('aria-expanded') === 'false');
        menuSearchButton.attr('aria-label', menuSearchButton.attr('aria-label') === 'Expand search form' ? 'Collapse search form' : 'Expand search form');
        menuSearchButton.toggleClass('menu-search-button-expanded');
        form.find('form').toggleClass('show-form');
        if (form.find('form').hasClass('show-form')) {
          form.find('.su-site-search__input').focus();
        }
      });
      $('.su-multi-menu--dropdowns', context).append(menuSearchButton).closest('header').append(form);

      // add search key to search results page input
      let queryParam = new URLSearchParams(window.location.search);
      const searchResultsForm = $('#block-chem-h-subtheme-search-form .su-site-search__input');
      searchResultsForm.val(queryParam.get('key'));

      // Person node header profile button
      $('.su-quote__bio', context).append($('.su-person-profile-link', context).detach());

      // Square image for Person lists
      $('.stanford-people-grid img, .taxonomy-term-pages.people-terms img').each(function () {
        const newImgSrc = $(this).attr('src').replace(/styles\/.*\/public/g, 'styles/large_square/public');
        $(this).attr('src', newImgSrc)
          .removeAttr('height')
          .removeAttr('width');
      });

      // Heading change for the halfpill title banner.
      const halfpillBannerHeadings = $('.chemh-wrapper--banner-halfpill-title h2, .chemh-wrapper--banner-halfpill-title h3, .chemh-wrapper--banner-halfpill-title h4, .chemh-wrapper--banner-halfpill-title .su-font-splash');

      $(halfpillBannerHeadings).each(function(index, element) {
        $(this).contents().unwrap().wrap('<h1/>');
      });

      // Bckground color needed on only the Halfpill title banner.
      $('.chemh-wrapper--banner-halfpill-title').parents().find('.su-page-banner').addClass('su-page-banner--title');

      // Replace <a> tag for event node event type taxonomy with <p>
      $('.node.event .section-editorial-content .su-event-type a').contents().unwrap().wrap('<p/>');

      // Replace <a> tag for news node news topics taxonomy with <p>
      $('.news.node .layout--section-news-header .section-header .su-news-topics a').contents().unwrap().wrap('<p/>');

    }
  };

})(jQuery);
