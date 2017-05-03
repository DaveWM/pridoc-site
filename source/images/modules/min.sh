#!/bin/bash
imagemin ./$1/* --out-dir=$1/minified && rm $1/*.$2 && mv $1/minified/* $1/ && rm -rf $1/minified
