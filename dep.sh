#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# # 生成静态文件
# npm run build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# echo 'myblog.hfllog.space' > CNAME

git add .
git commit -m "提交更新"
# git commit -m 'deploy'
git push -f origin main:main

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:hfllove/myblog.git master:gh-pages

cd -