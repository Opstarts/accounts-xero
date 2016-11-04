/* global Package */

// based on code from https://github.com/axwaxw/xero
Package.describe({
  summary: 'Login service for Xero',
  version: '0.1.1',
  name: 'andylash:accounts-xero',
  git: 'https://github.com/Opstarts/accounts-xero.git',
});


Package.on_use(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('ecmascript', ['client', 'server']);
  api.use('andylash:xero@0.1.1', ['client', 'server']);

  api.use('http', ['client', 'server']);

  api.add_files('xero_login_button.css', 'client');

  api.add_files('xero.js');
  api.add_files('xero_common.js', ['client', 'server']);
});

