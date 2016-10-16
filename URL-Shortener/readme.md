********************DOCUMENTATION************************


********************Installation*************************

Required packages for this are....

"body-parser": "^1.15.2",

"express": "^4.14.0"

 "mysql": "^2.11.1",

 "sequelize": "^3.24.3"


********************API ENDPOINTS***********************

Endpoints are...

POST: /api/v1/url
Create a shortened URL

GET: /api/v1/urls
Display all URLS

GET: /api/v1/url/:id
Display URL based upon id

POST: /api/v1/url/:id
Update URL based upon id

DELETE:  /api/v1/url/:id
Delete url based upon id


********************EXAMPLE OUTPUTS********************

Examples of JSON outputs are...

{"url":"j0sq1"}

{"url":"ov3xx"}

{"url":"04d75"}

*******************DEBBUGING USAGE*********************

When the .env variable DEBUG=true, logs for http requests will be stored in the logs.txt file to be reviewed.
If DEBUG=false messages will not be saved or written.



*****************STYLE GUIDE DOCUMENTATION*************

The style guide used for this project was the Airbnb JavaScript Style Guide which was enforced using ESLint.

Here a link to the documentation for the styleguide.

https://github.com/airbnb/javascript

*******************Workflow***************************

In order to add a new feature the master branch needs a new working branch.

Once the working branch is complete push this branch to the master branch in order
This branch will then be pushed to the release branch where a new version will be released.

*******************Deployment**************************

Once a new feature is pushed to the release branch heroku will use the deployment pipeline to test with codeship
and then have GitHub create a new tagged release.