# `json-translator`
[![GitHub repo size](https://img.shields.io/github/repo-size/CriminalInjuriesCompensationAuthority/json-translator)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator)
[![GitHub repo version](https://img.shields.io/github/package-json/v/CriminalInjuriesCompensationAuthority/json-translator)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator/releases/latest)
[![GitHub repo npm version](https://img.shields.io/badge/npm_version-no_engines_data-blue)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator/blob/master/package.json#L7)
[![GitHub repo node version](https://img.shields.io/badge/node_version-no_engines_data-blue)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator/blob/master/package.json#L8)
[![GitHub repo contributors](https://img.shields.io/github/contributors/CriminalInjuriesCompensationAuthority/json-translator)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator/graphs/contributors)
[![GitHub repo license](https://img.shields.io/github/package-json/license/CriminalInjuriesCompensationAuthority/json-translator)](https://github.com/CriminalInjuriesCompensationAuthority/json-translator/blob/master/LICENSE)


The `json-translator` module translates a `l10n` formatted string in to its corrisponding translation. `json-translator` is a dependency of the [Data Capture Service API](https://github.com/CriminalInjuriesCompensationAuthority/data-capture-service). 

## Prerequisites
* Windows machine running docker desktop.
* You have Node Version Manager (NVM) installed globally. <sup>(_recommended, not required_)</sup>
* You have NPM `">=8.5.2"` installed globally.
* You have Node `">=16.0.0"` installed globally.
* You have the Postgres `create-tables.sql` file in a sibling directory named `postgres-scripts` (this mapping is defined in the `docker-compose.yml` file)

## Installing `json-translator`

Clone the `json-translator` repo, and `npm install`. This is not required to run the web app, this step would be carried out if you were doing development work and updating the translator.

## Using `json-translator`
`json-translator` is a dependency of the [Data Capture Service API](https://github.com/CriminalInjuriesCompensationAuthority/data-capture-service) and it will be installed and used at run time by the Data Capture Service.

If you are modifying the `q-templates-application`, it should be mounted via the `docker-compose.yml`. After mounting, you should `down`, `build`, and `up` to create a clean set up.

> Full instructions on the required directory structure and configuration is found in the `Docker-compose-setup-for-CW,-DCS,-Postgres` Utilities Wiki article <sup>(_private repo_)</sup>.

## Contributors
Thanks to the following people who have contributed to this project:
* [@armoj](https://github.com/armoj)
* [@neil-stephen-mcgonigle](https://github.com/neil-stephen-mcgonigle)
* [@sinclairs](https://github.com/sinclairs)


## License
This project uses the following license: MIT.
