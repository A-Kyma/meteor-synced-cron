Package.describe({
  summary: "Define and run scheduled jobs across multiple servers.",
  version: "3.0.1",
  name: "akyma:synced-cron",
  git: "https://github.com/percolatestudio/meteor-synced-cron.git"
});

Npm.depends({later: "1.2.0"});

Package.onUse(function (api) {
  api.versionsFrom(['2.16','3.0']);
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], "server");
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['check', 'mongo'], 'server');
  api.use(['tinytest', 'underscore', 'logging']);
  api.addFiles(['synced-cron-server.js', 'synced-cron-tests.js'], ['server']);
});
