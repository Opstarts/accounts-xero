Xero OAuth for Meteor
=====================

accounts-xero allows oAuth via the Xero API

Latest Version: **0.1.0**

## Install

To install in a new project:
```bash
> mrt add accounts-ui
> mrt add accounts-xero
```

Then include in your Handlebars template:

```html
{{loginButtons align="right"}}
```

###TO DO / Contributions

Contributions are welcome.

TO DO:

Unlike the oAuth services upon which this is based (twitter and fitbit), The Xero API does not return the current user.  The servideData (see https://github.com/axwaxw/xero ) is currently hard-coded and it would be better to retun e.g. the organisation name / id

### Credits

Based on wbartley's [accounts-fitbit](https://github.com/wbartley/accounts-fitbit)
