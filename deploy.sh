#!/bin/bash
git checkout
node --version
npm --version
npm install now -g
now --token=$NOW_TOKEN --name=meters --prod