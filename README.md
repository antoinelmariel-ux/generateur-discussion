# Générateur de discussion

Cette application propose un jeu de cartes pour animer des discussions autour du management en pharmacie hospitalière. Elle s'appuie sur un fichier de données (`cards_data.js`) qui décrit l'ensemble des cartes disponibles.

## Utilisation

- **Interface principale** : ouvrez `card_discussion.html` dans votre navigateur pour accéder au jeu de cartes interactif.
- **Backoffice** : ouvrez `backoffice.html` pour créer, modifier, importer ou exporter facilement le contenu des cartes.

## Backoffice des cartes

Le backoffice permet de :

- ajouter, réordonner ou supprimer des cartes et leurs variations ;
- importer un fichier JSON ou `cards_data.js` existant par le bouton prévu ou via glisser-déposer ;
- générer un nouveau fichier `cards_data.js` prêt à être utilisé par l'application.

Toutes les modifications restent locales à votre navigateur jusqu'à ce que vous téléchargiez le fichier et le remplaciez dans le projet.

## Structure des fichiers

- `card_discussion.html` : interface du jeu de cartes.
- `card_discussion.js` / `card_discussion.css` : logique et style de l'interface principale.
- `backoffice.html` : interface de gestion du contenu.
- `backoffice.js` / `backoffice.css` : logique et style du backoffice.
- `cards_data.js` : contenu des cartes de discussion.

## Version

La version de l'application est indiquée dans le pied de page des différentes interfaces.
