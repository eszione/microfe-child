# MicroFE Setup

## To use astro-sso-sdk
Fill config.json client id and env

Copy the oicd.user total from Motek and update the client id and env (e.g. oidc.user:https://[env]accounts.thlonline.com:[client_id] to oidc.user:https://testaccounts.thlonline.com:microfe) to match the config.json

Copy the templates/callback.html (from astro-app) and set the silentRedirectUri to point to that file (need HtmlWebpackPlugin to set the path)

[UPDATED]
There is a chrome extension which copies the oicd token from localhost:5000 to localhost:xxxx. If we have the correct setup logic, then this whole process above can be automated
