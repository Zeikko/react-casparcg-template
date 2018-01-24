# Caspar CG React Template

React.js template for Caspar with autoreload

## Setup

1. `yarn run install`
2. Set `casparTemplatePath`, `casparTemplateDirectory`, `templateName`, `casparHost` and `casparPort` in `config.js`

## Turning on Caspar CG autoreload

1. `yarn run watch:caspar`
2. `yarn run update-caspar`

Now you should see all template changes immediately in Caspar CG.
If you add new files you need to restart `watch:caspar`

## Turning on browser autoreload

1. `yarn run watch:browser`

Now you should see all template changes immediately with your browser in localhost:1234
If you add new files you need to restart `watch:browser`

## Building

1. `yarn run build`

build directory should contain template files that can be used in your production Caspar CG.