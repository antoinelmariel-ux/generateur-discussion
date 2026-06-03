# Become the boss of ethical interactions with HCPs

Version application : **v1.0.2**

## Objectif

Cette V1 est une SPA locale destinée à aider des marketeurs d'un laboratoire pharmaceutique à animer une discussion autour de principes éthiques appliqués aux interactions avec des professionnels de santé.

L'application fonctionne sans serveur, sans backend, sans base de données, sans dépendance obligatoire et sans étape de build.

## Fonctionnalités V1

- Écran d'accueil sans header ni footer, avec lancement du jeu et accès au backoffice.
- Espace Jeu avec deux tas de cartes : **Principes** et **Activités**.
- Tirage aléatoire d'une paire valide Principe / Activité.
- Exclusion des paires déjà piochées pendant la session courante.
- Cartes retournées avec titre et description.
- Révélation de l'implication experte associée au couple tiré.
- État de fin lorsque toutes les paires disponibles ont été jouées.
- Réinitialisation de session.
- Backoffice local avec administration des principes, activités et associations.
- Import d'un fichier JSON de configuration.
- Export d'un fichier JSON conforme au modèle `AppConfig`.
- Jeu de données d'exemple immédiatement utilisable dans `ethical-quizz-data.example.json`.

## Lancer l'application

Aucune installation n'est nécessaire.

1. Ouvrir `index.html` dans un navigateur moderne.
2. Cliquer sur **Commencer**.
3. Piocher une paire de cartes.
4. Cliquer sur **Voir les implications**.
5. Utiliser le **Backoffice** pour modifier, importer ou exporter les contenus.

> Les données d'exemple sont aussi embarquées dans `app.js` afin que l'application reste utilisable en ouverture directe `file://`.

## Fichiers

- `index.html` : structure de la SPA, écrans Accueil, Jeu et Backoffice.
- `styles.css` : styles responsive, cartes, animations et formulaires.
- `app.js` : données fallback, logique métier, rendu et import/export JSON.
- `ethical-quizz-data.example.json` : configuration d'exemple réutilisable.
- `README.md` : documentation de la V1.
- `AGENTS.md` : conventions de contribution pour les agents.

## Modèle JSON

```json
{
  "version": "1.0.2",
  "updatedAt": "2026-06-03T00:00:00.000Z",
  "principles": [
    {
      "id": "principle-example",
      "title": "Titre",
      "description": "Description",
      "order": 1,
      "isActive": true
    }
  ],
  "activities": [
    {
      "id": "activity-example",
      "category": "Catégorie",
      "title": "Titre",
      "description": "Description",
      "isActive": true
    }
  ],
  "matchings": [
    {
      "id": "matching-example",
      "principleId": "principle-example",
      "activityId": "activity-example",
      "expertImplication": "Implication experte.",
      "isActive": true
    }
  ]
}
```

## Logique métier

- Seules les cartes actives participent aux tirages.
- Seules les associations actives entre un principe actif et une activité active sont éligibles.
- Une association déjà tirée n'est plus proposée pendant la même session.
- Si toutes les associations éligibles ont été tirées, un message de fin est affiché.
- Si l'import JSON échoue, la configuration courante est conservée.
- L'export JSON produit un fichier local téléchargeable.

## Tests manuels recommandés

- Accueil → Jeu → tirage → implication → nouveau tirage → fin de session.
- Vérifier qu'une paire ne revient pas pendant une session.
- Réinitialiser la session et vérifier que les paires redeviennent disponibles.
- Importer `ethical-quizz-data.example.json` depuis le backoffice.
- Importer un JSON invalide et vérifier que l'application reste stable.
- Créer un principe, une activité et une association, puis exporter le JSON.
- Tester l'affichage sur mobile et desktop.
- Vérifier la console navigateur.

## Limites V1

- Les modifications du backoffice ne persistent pas après rechargement si elles ne sont pas exportées.
- Aucun compte utilisateur, rôle, scoring, timer ou mode multijoueur n'est inclus.
- Aucune donnée n'est envoyée à un service externe.
- Aucune donnée personnelle n'est collectée.

## Prochaine itération possible

- Ajouter une sauvegarde locale optionnelle dans le navigateur.
- Ajouter un mode facilitateur avec notes de discussion.
- Ajouter une validation JSON plus détaillée avant export.
