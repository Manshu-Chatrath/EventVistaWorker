# EventVista Scheduler

The EventVista Scheduler is a backend service responsible for managing automated tasks within the EventVista application. It utilizes Bull and Redis to handle background jobs such as user verification and event lifecycle management.

## Node Version

This project requires **Node.js version 18.x** or higher.

## Running the Application

To run the application, use the following command:
npm start
This will start the server using `nodemon`, which automatically restarts the application when file changes are detected.


## Environment Variables

The EventVista backend requires several environment variables to function properly. Create a `.env` file in the root directory and include the following variables:
SECRET_KEY=<your_secret_key>
REDIS_URL=<your_redis_url>
MYSQL_USER=<your_mysql_user>
MYSQL_PASSWORD=<your_mysql_password>
MYSQL_HOST=<your_mysql_host>
MYSQL_PORT=<your_mysql_port>
MYSQL_DATABASE=<your_mysql_database>
EMAIL_PASSWORD=<your_email_password>
AWS_ACCESS_KEY=<your_aws_access_key>
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
OPEN_AI_KEY=<your_openai_key>
GOOGLE_PRIVATE_KEY=<your_google_private_key>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_KEY=<your_google_key>
```


