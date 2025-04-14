# Allez dans le dossier /config ou
# Remplacez-le par votre dossier de configuration Home Assistant s'il est différent
##cd /config

# Ajouter tous les fichiers au référentiel en respectant les règles .gitignore
##git add .

# Valider les modifications avec le message de l'horodatage actuel
##git commit -m "config files on `date +'%d-%m-%Y %H:%M:%S'`"

# Pousser les changements vers GitHub
##git push -u origin master


#!/bin/bash
date >> /config/git-last.txt
cd /config
export GIT_SSH_COMMAND="ssh -i /root/.ssh/id_rsa"
git config --global user.email "crochonremy@gmail.com"
git config --global user.name "remycrochon"
git add .
git status
# Commit changes with message with current date stamp
git commit -m "config files on `date +'%d-%m-%Y %H:%M:%S'`"
# Push changes towards GitHub
git push -u origin master
exit