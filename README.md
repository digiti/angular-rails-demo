# Angular Rails Demo

This Rails 5 project contains a [Grape API](https://github.com/ruby-grape/grape). This API has a dummy 'GET Articles'-endpoint which is used by the Angular frontend. The angular frontend is completely integrated into the Rails asset pipeline (no Grunt or Gulp). Frontend dependencies are installed through Bower.

A Docker setup is included in the project. It uses a Postgresql image and a Passenger/Nginx image in combination through Docker Compose. Setup instructions can be found below. 

## Docker setup instructions

1. Build the container by executing `docker-compose up` in the root of the project.
2. When the container is build, get a bash shell for it with the following command: `docker exec -it angularrailsdemo_web bash` (the name of the container could be different, find it with `docker ps`)
3. Next move to the project folder: `cd /home/app/webapp`
4. Setup the database: `rake db:create db:migrate db:seed`
5. Install frontend dependencies by running the following command locally (needs Bower installed): `rake bower:install`

Now you should be able to see the demo application by surfing to the IP of your Docker machine, most likely this is [192.168.99.100](http://192.168.99.100).

## Deploy steps
1. Update application code
2. Install new Ruby dependencies: `bundle install`
3. Install new Bower dependecies: `rake bower:install`
4. Create database and run migrations: `rake db:create db:migrate`
5. Precompile the assets: `rake assets:precompile`
6. Restart server


## Run tests

The API is tested with [RSpec](http://rspec.info/). A exmaple model spec can be found in /spec/models/article_spec.rb

To execute the tests folow the following steps:

1. Bash into the container: `docker exec -it angularrailsdockerdemo_web_1 bash` (the name of the container could be different, find it with `docker ps`)
2. Navaigate to the project root: `cd /home/app/webapp`
3. Now the tests can be executed with the following command: `rspec`

## Specs

* Ruby: 2.3.1p112
* Rails: 5.0.0.1
* Postgresql: 9.5.3
* Webserver: Nginx
* App server: Passenger





