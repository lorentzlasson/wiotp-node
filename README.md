# wiotp-node
<> = placeholder value

## Setup
1. Clone repository  
1. `cd wiotp-node`

### Run device locally
1. `cd <path/to>/wiotp-node/device`  
1. `ID=<unique device id> npm start`

### Run application locally
1. `cd <path/to>/wiotp-node/app`  
1. `ID=<unique app id> DEVICE_ID=<ID from device> npm start`

## Run application on Bluemix
1. `cd <path/to>/wiotp-node/app`  
1. Target desired organization and space in Bluemix using `cf login`  
1. `cf push <APP_NAME> --no-start` 
1. `cf set-env <APP_NAME> ID <unique app id>`  
1. `cf set-env <APP_NAME> DEVICE_ID <ID from device>`  
1. `cf start <APP_NAME>`  
1. See live logs using `cf logs <APP_NAME>`
