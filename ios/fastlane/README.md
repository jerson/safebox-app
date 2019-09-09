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
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios build_beta
```
fastlane ios build_beta
```
Build Beta IPA
### ios build_release
```
fastlane ios build_release
```
Build Release IPA
### ios deploy_release
```
fastlane ios deploy_release
```
Deploy a new version to the Apple Store - Release channel
### ios deploy_release_beta
```
fastlane ios deploy_release_beta
```
Deploy a new version to the Apple Store - Beta channel

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
