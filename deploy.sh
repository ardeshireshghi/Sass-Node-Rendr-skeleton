#!/bin/bash
CURRENT_PATH=$(pwd)

sudo apt-get install -y npm
sudo npm install gulp -g && npm install
sudo gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable --ruby
source /usr/local/rvm/scripts/rvm
gem install bundler
bundle install
gulp
# echo "\nChanging $CURRENT_PATH/public/css/* permissions... \n"
# chown -R ardi:ardi $CURRENT_PATH/public/css/*
# gulp watch

