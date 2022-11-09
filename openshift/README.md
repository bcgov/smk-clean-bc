# Deployment Information

## caddy-run-bc.yaml
This file is included for reference. A caddy image stream is required by all SMK apps deployed to OpenShift. The caddy-run BuildConfig object is already present in the Map Team OpenShift tools namespace available with the tag: IST caddy-run:latest.

## smk-firewood-bc.yaml
The build config object for the the smk-firewood app to be deployed to the Map Team OpenShift tools namespace. Separate BuildConfig objects must be created for the QA and Production apps.