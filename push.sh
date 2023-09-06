#!/bin/bash
###
 # @Author: korealu
 # @Date: 2022-03-08 15:23:56
 # @LastEditors: korealu 643949593@qq.com
 # @LastEditTime: 2022-07-07 10:31:19
 # @Description: file content
 # @FilePath: /h5-active-v2/push.sh
###
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
git add .
npm run commit
git push origin main
