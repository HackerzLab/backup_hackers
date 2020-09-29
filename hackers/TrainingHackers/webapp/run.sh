#!/bin/bash

export HOME=/home/hackers
export PATH="$HOME/.plenv/bin:$PATH"
eval "$(plenv init -)"

export HACKERS_DB_HOST=localhost
export HACKERS_DB_PORT=3306
export HACKERS_DB_USER=hackers
export HACKERS_DB_PASSWORD="Hn9~60/81x"
export HACKERS_DB_NAME=hackers

cd $HOME/TrainingHackers/webapp

exec carton exec -- start_server --path /dev/shm/app.sock -- plackup -s Starlet --max-workers 5 -E prod -a app.psgi
