#! /bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd);

cd $SCRIPT_DIR;
node home-voice.js ${@:1}



