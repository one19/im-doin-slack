# IM-DOIN-SLACK

[![Maintenance status](https://raw.githubusercontent.com/one19/project-status/master/cache/im-doin-slack/maintained.svg?sanitize=true)](https://github.com/one19/project-status) [![Very unstable code](https://raw.githubusercontent.com/one19/project-status/master/cache/im-doin-slack/maintenance.svg?sanitize=true)](https://github.com/one19/project-status) [![Known Vulnerabilities](https://snyk.io/test/github/one19/im-doin-slack/badge.svg?targetFile=functions%2Fpackage.json)](https://snyk.io/test/github/one19/im-doin-slack)


---
### WHAT:
This is a super experimental repo for using slack to send [im-doin](https://github.com/one19/im-doin) updates to your [im-doin-frontend](https://github.com/one19/im-doin-frontend).
*DO NOT TRY TO USE THIS*
It uses firebase/gcloud functions to pass messages to your firebase database, that runs your personal im-doin' website.

### HOW:
Create an imdoin' app. Create the frontend. Create the Firebase db. Create the firebase functions account and install the tools. Push the code after figuring out envs. Set the envs on your firbase function and redeploy. Put the firebase url into a new slack integration. Send the `/command` messages to update your frontend.

Clearly DO NOT TRY TO USE THIS CODE. I will be creating *ease* in the future, trying now would only result in **extreme** frustration.

### TODO:
1. fix the process.exit() bullshit in im-doin
2. add actual documentation of how to use this.
2. add *alot* more documentation, infact, probably bundle it into base module
3. add actual pathway for automated setup of this system.
4. TESTS
5. Deploy slack integration for anyone to use, given they input envs on slack
6. Lint
