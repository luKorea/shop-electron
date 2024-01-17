#!/bin/bash
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
branch=(`git symbolic-ref --short HEAD`)
echo $branch;

check_remote_branch() {
  local branch_name=$1
  local remote_branches=(`git branch -r | sed 's/origin\///'`)
  for remote_branch in "${remote_branches[@]}"; do
    if [[ "$remote_branch" == *"$branch_name" ]]; then
      git push origin $branch
      return 1  # 返回成功状态码
    fi
  done
  git push origin --set-upstream $branch
  return 0  # 返回失败状态码
}


git add .
npm run commit
check_remote_branch $branch
