#!/bin/bash
git add .
git commit -m "Auto-commit: $(date)"
git push origin main
# gp for instaed of alias gp="./git_push.sh"
# source ~/.bashrc
# source ~/.zshrc
# gp
