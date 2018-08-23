# FX Action

## Overview

Action for FX information as IBM Cloud Founctions(Node.js V8)


## Pre-requisites

- [IBM Cloud](http://bluemix.net/) account

- **ibmcloud** command and **Cloud Functions plugin** need to be installed.

    - `$ curl -sL http://ibm.biz/idt-installer | bash`

    - `$ ibmcloud -v`

    - `$ ibmcloud plugin install cloud-functions -r Bluemix`

- Node.js(V8+) and npm need to be installed.


## Setup

- Login with **ibmcloud** command, then set org and space

    - `$ ibmcloud login`

    - `$ ibmcloud target --cf`

- Git clone or Download zip from this repository

- Install dependencies

    - `$ npm install`

- Create whole zipped file

    - `$ zip -r myAction.zip *`

- Deploy this zipped file as an action of IBM Cloud Functions

    - `$ ibmcloud wsk action create yourActionName myAction.zip --kind nodejs:8`

        - In this way with zipped file, you need to specify **--kind** and **nodejs:8** parameters

        - If you edit code, and recreated zipped file, you may specify **update** instead of **install**

            - `$ ibmcloud wsk action update yourActionName myAction.zip --kind nodejs:8`


## Run

- Invoke this action from Dashboard, or following command:

    - `$ ibmcloud wsk action invoke --result yourActionName`


## References

https://github.com/jthomas/openwhisk-workshops/tree/master/bootcamp/ex1.3%20-%20bundling%20NPM%20modules


## Licensing

This code is licensed under MIT.

https://github.com/dotnsf/fxAction/blob/master/LICENSE


## Copyright

2018 K.Kimura @ Juge.Me all rights reserved.
