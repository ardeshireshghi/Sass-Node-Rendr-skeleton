#!/bin/bash
echo "Plese select linux or mac"
read os

CURRENT_PATH=$(pwd)

if [[ $os == "mac" ]]; then
    echo "You chose mac"
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew install node
    sudo npm install gulp -g && npm install
    gem install bundler
    bundle install
    gulp

elif [[ $os == "linux" ]]; then
    echo "You chose linux"
    sudo apt-get install -y npm
    sudo npm install gulp -g && npm install
    sudo gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby
    source /usr/local/rvm/scripts/rvm
    gem install bundler
    bundle install
    gulp

else
    echo "OS not recognised, please try again"
fi
