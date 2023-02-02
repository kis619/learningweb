#!/bin/sh

directoryName="$1";
mkdir $directoryName;
cd ./$directoryName;

mkdir styles scripts images
touch styles/style.css
touch scripts/script.js

cp ../../../og/prototype_index.html index.html
# cp ../../../og/images/* images/