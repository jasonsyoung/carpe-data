#!/usr/bin/env bash
./node_modules/.bin/mocha \
    --reporter=doc --colors=true --ui=bdd \
    | cat docs/head.html - docs/tail.html > index.html

#    | ./node_modules/.bin/hcat
