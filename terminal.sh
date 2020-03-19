#Divers 
cd <chemin du dossier>                                    # : pour se déplacer 
node <nom du fichier>                                     # : lancer un script avec node.js

#GIT
git init                                                  # initialise la sauvegarde d'un projet git 
git add <nom du fichier / dossier>                        # ajouter les modifications au prochain commit
git commit -m "<message à attacher au commit>"            # sauvegardé les modifications précédemment ajoutées
git status                                                # affiche l'état de mon projet git à cet instant
git log                                                   # affiche l'historique des commits, pour sortir "q"
git restore <nom fichier / dossier>                       # remet le contenu du fichier à l'état du dernier commit
git checkout <nom d’une branche ou hash du commit>        # déplacer la tete de lecture (HEAD) sur la branche ou le commit      choisi 
git branch <nom de la branche>                            # créé une branche en copiant la branche actuelle 
git branch                                                # liste les branches existantes
git push <nom du dépôt> <branche distante>                # envoie la branche courante sur la branche distante du dépôt choisi
git push -u <nom du dépôt> <branche distante>             # idem, mais paramètre la branche locale pour correspondre à la       branche distante