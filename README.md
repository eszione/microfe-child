# MicroFE Setup

## To use astro-sso-sdk
There is a [chrome extension](https://chrome.google.com/webstore/detail/copy-oicd/ppipchgknjphicdjlgjgeimghkoagggb?utm_source=ext_sidebar&hl=en-GB) which copies the oicd token from localhost:5000 to localhost:xxxx

Steps to get this to work:
1. Install the chrome extension
2. Run astro-app via localhost:5000
3. Update the client id and env in the config.json (e.g. oidc.user:https://[env]accounts.thlonline.com:[client_id] to oidc.user:https://testaccounts.thlonline.com:microfe)
4. Run the microFE

# Source code

## Core
This bit contains logic for the core setup for the microFE. Core setup includes: astroSDK, history, routes, sharing of host data via window and the microFE redux store

### Routing
Routing is handled by the host application, so the microFE mainly defines the routes

### Window
Since routing is handled by the host, we are using the browser history from the host. This is stored in window['Motek_history']

When sharing state from the host to the microFE, we have the host's redux store in the window['host_store']

The microFe has it's own states defined in configureStore.ts. The name of the store needs to change for each microFE

## Externals
All components that will be shared with the host application should live in the externals folder and exported in the index.tsx

# Webpack
For microFE's, we cannot use the runtimeChunk and splitChunks optimization section (the host application will not be able to import the module federation component of the microFEs)

## Global styling
Shared .sass/.scss files are added via webpack's sass-resource-loader in webpack.common.js. 

There is also a css-loader which looks at node_modules .css files. This loader only adds .css files from npm package components which are referenced via the code (e.g. astro-components .css files won't be added by default). The issue arose in the customers list page (the template is based off this microFE) where the search input was not applying the styles as the styles came from the FieldRenderer component in astro-components.

To decouple the microFE styles, we should extract the required CSS from astro-components to the microFE.

## Module Federation
We share the react and react-dom packages with a requiredVersion (see webpack.js). These version needs to match the host application's (astro-app) react and react-dom versions. When we upgrade react, we will need to upgrade react in every microFE (similar to a dotnet core upgrade for our BE services)