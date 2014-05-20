Package.describe({
  summary: "Login service for Xero"
});

Package.on_use(function(api) {
  	api.use('underscore', ['server']);  
	  api.use('accounts-base', ['client', 'server']);
  	api.imply('accounts-base', ['client', 'server']);
  	api.use('accounts-oauth', ['client', 'server']);
  	api.use('xero', ['client', 'server']);

  	api.use('http', ['client', 'server']);

  	api.add_files('xero_login_button.css', 'client');

  	api.add_files('xero.js');
	  api.add_files('xero_common.js', ['client', 'server']);

});

