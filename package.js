Package.describe({
  name: 'hydraorc:string',
  version: '1.0.4',
  summary: 'Small, simple and useful package to work with strings',
  git: 'https://github.com/HydraOrc/meteor-string'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles([
    'index.js'
  ]);

  api.export('sanitizeString');
  api.export('escapeRegExp');
});
