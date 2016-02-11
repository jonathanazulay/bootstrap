// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'jonathanazulay:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '4.0.0-alpha',
  git: 'https://github.com/twbs/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.use('fourseven:scss');

  api.addFiles([
      'scss/_alert.scss',
      'scss/_animation.scss',
      'scss/_breadcrumb.scss',
      'scss/_button-group.scss',
      'scss/_buttons.scss',
      'scss/_card.scss',
      'scss/_carousel.scss',
      'scss/_close.scss',
      'scss/_code.scss',
      'scss/_custom-forms.scss',
      'scss/_dropdown.scss',
      'scss/_forms.scss',
      'scss/_grid.scss',
      'scss/_images.scss',
      'scss/_input-group.scss',
      'scss/_jumbotron.scss',
      'scss/_labels.scss',
      'scss/_list-group.scss',
      'scss/_media.scss',
      'scss/_mixins.scss',
      'scss/_modal.scss',
      'scss/_nav.scss',
      'scss/_navbar.scss',
      'scss/_normalize.scss',
      'scss/_pager.scss',
      'scss/_pagination.scss',
      'scss/_popover.scss',
      'scss/_print.scss',
      'scss/_progress.scss',
      'scss/_reboot.scss',
      'scss/_responsive-embed.scss',
      'scss/_tables.scss',
      'scss/_tooltip.scss',
      'scss/_type.scss',
      'scss/_utilities-background.scss',
      'scss/_utilities-responsive.scss',
      'scss/_utilities-spacing.scss',
      'scss/_utilities.scss',
      'scss/_variables.scss',
      'scss/bootstrap-flex.scss',
      'scss/bootstrap-grid.scss',
      'scss/bootstrap-reboot.scss',
      'scss/bootstrap.scss',
      'scss/mixins/_alert.scss',
      'scss/mixins/_background-variant.scss',
      'scss/mixins/_border-radius.scss',
      'scss/mixins/_breakpoints.scss',
      'scss/mixins/_buttons.scss',
      'scss/mixins/_cards.scss',
      'scss/mixins/_center-block.scss',
      'scss/mixins/_clearfix.scss',
      'scss/mixins/_forms.scss',
      'scss/mixins/_gradients.scss',
      'scss/mixins/_grid-framework.scss',
      'scss/mixins/_grid.scss',
      'scss/mixins/_hover.scss',
      'scss/mixins/_image.scss',
      'scss/mixins/_label.scss',
      'scss/mixins/_list-group.scss',
      'scss/mixins/_lists.scss',
      'scss/mixins/_nav-divider.scss',
      'scss/mixins/_navbar-align.scss',
      'scss/mixins/_pagination.scss',
      'scss/mixins/_progress.scss',
      'scss/mixins/_pulls.scss',
      'scss/mixins/_reset-filter.scss',
      'scss/mixins/_reset-text.scss',
      'scss/mixins/_resize.scss',
      'scss/mixins/_screen-reader.scss',
      'scss/mixins/_size.scss',
      'scss/mixins/_tab-focus.scss',
      'scss/mixins/_table-row.scss',
      'scss/mixins/_text-emphasis.scss',
      'scss/mixins/_text-hide.scss',
      'scss/mixins/_text-truncate.scss'
	], 'client', {isImport: true});
});
