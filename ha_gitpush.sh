# Allez dans le dossier /config ou
# Remplacez-le par votre dossier de configuration Home Assistant s'il est différent
cd /config

# Ajouter tous les fichiers au référentiel en respectant les règles .gitignore
git add .

# Valider les modifications avec le message de l'horodatage actuel
git commit -m "config files on `date +'%d-%m-%Y %H:%M:%S'`"

# Pousser les changements vers GitHub
git push -u origin master