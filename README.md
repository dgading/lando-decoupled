# Decoupled Lando Environment
Running this Lando setup will install a Drupal 8 site behind an nginx server, a MariaDB, and a Node server sharing a development version of Create React App at :3333.

## Running the environment
1. Clone this repo.
1. Run `lando start` to build the containers.
1. Open your browser to `http://cms.decoupled.lndo.site/` and run a standard install. 
1. Enable the JSONAPI and JSONAPI extra modules with `lando drush en jsonapi jsonapi_extras`
1. Create some Articles in the Drupal site with path aliases.
1. In a separate terminal window, run `lando yarn start` to begin the React development server.
1. If Articles exist, you should see them at `http://decoupled.lndo.site:3333/` or a banner will appear with the error from the request. 

## Developing on this environment

The environment is setup with all of your Drupal code in the backend folder and the React code in the frontend folder.

### Tools Available
Current Composer, Drush, Node, npm, and Yarn are available and connected to their service.  

#### Composer
This Drupal build uses the Drupal Composer structure, so all new modules should be added with `lando composer require`.

#### Drush
Drush is available for the Drupal build. To run a command like clear cache, use `lando drush cr`. Any default Drush command should be available using `lando drush <command>`

#### Yarn
The Create React app is installed and run using Yarn. Any Yarn command can be run using `yarn <command>`. For example, if you have stopped the development server and want to restart it, just use `lando yarn start`.