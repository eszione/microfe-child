# MicroFE Setup

## To use astro-sso-sdk
Fill config.json client id and env

Copy the oicd.user total from Motek and update the client id (e.g. oidc.user:https://testaccounts.thlonline.com:microfe) to match the config.json

Copy the templates/callback.html (from astro-app) and set the silentRedirectUri to point to that file (need HtmlWebpackPlugin to set the path)