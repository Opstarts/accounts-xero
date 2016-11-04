import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Xero } from 'meteor/andylash:xero';

Accounts.oauth.registerService('xero');

if (Meteor.isClient) {
  Meteor.loginWithxero = function(opts, cb) {
    // support a callback without options
    let options = opts;
    let callback = cb;
    if (! callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Xero.requestCredential(options, credentialRequestCompleteCallback);
  };

  Meteor.linkWithXero = function(opts, cb) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(402, 'Please login to an existing account before link.');
    }

    let options = opts;
    let callback = cb;
    if (! callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    Xero.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  const fields = ['id', 'name'];
  const autopublishedFields = fields.map(subfield => `services.xero.${subfield}`);

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields,
  });
}
