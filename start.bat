rem ***********************************************************************
rem This BATCH file installs a utility Node.JS app - HttpServer 
rem and starts it on port 8080 or any other first available port.
rem This is required in order to properly execute our JavaScript scripts.
rem ***********************************************************************
call npm install -g http-server
cd src
http-server