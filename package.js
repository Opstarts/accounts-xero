/* global Package */

// based on code from https://github.com/axwaxw/xero
Package.describe({
  summary: 'Login service for Xero',
  version: '0.1.2',
  name: 'andylash:accounts-xero',
  git: 'https://github.com/Opstarts/accounts-xero.git',
  documentation: null,
});


Package.on_use(function(api) {
  api.use('underscore@1.0.9', ['server']);
  api.use('accounts-base@1.2.11', ['client', 'server']);
  api.use('accounts-oauth@1.1.13', ['client', 'server']);
  api.use('ecmascript@0.5.8', ['client', 'server']);
  api.use('andylash:xero@0.1.2', ['client', 'server']);

  api.use('http@1.2.9', ['client', 'server']);

  api.add_files('xero_login_button.css', 'client');

  api.add_files('xero.js');
  api.add_files('xero_common.js', ['client', 'server']);
});

