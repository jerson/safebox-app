fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android build_beta
```
fastlane android build_beta
```
Build Beta APK
### android build_release
```
fastlane android build_release
```
Build Release Bundle
### android deploy_release
```
fastlane android deploy_release
```
Deploy a new version to the Google Play - Release channel
### android deploy_release_beta
```
fastlane android deploy_release_beta
```
Deploy a new version to the Google Play - Beta channel
### android deploy_release_internal
```
fastlane android deploy_release_internal
```
Deploy a new version to the Google Play - Internal channel

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
