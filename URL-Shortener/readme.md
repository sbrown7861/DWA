********************DOCUMENTATION************************


Required packages for this are....

"body-parser": "^1.15.2",

"express": "^4.14.0"

 "mysql": "^2.11.1",

 "sequelize": "^3.24.3"


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




Examples of JSON outputs are...

{"url":"j0sq1"}

{"url":"ov3xx"}

{"url":"04d75"}

*******Debugging Usage********

When the .env variable DEBUG=true, logs for http requests will be stored in the logs.txt file to be reviewed.
If DEBUG=false messages will not be saved or written.