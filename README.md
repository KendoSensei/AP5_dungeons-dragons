# D&D Character Creation API

Une API pour créer des fiches de personnages pour Dungeons & Dragons 5th Edition.

## Fonctionnalités

	•	Création de personnages : Ajoutez des personnages avec des classes, races, alignements, et attributs.
    •	Informations de création : Récupérez les options disponibles pour créer un personnage (classes, races, alignements, etc.).

## Installation

### Prérequis

	•	Node.js (version 14+)
	•	npm
	•	postman (optionnel mais recommandé)

### Étapes d’installation

1. Installez les dépendances :

```shell
npm install
```

2. Démarrez l’application :

```shell
npm start
```

L’API sera disponible sur http://localhost:3000.

## Endpoints

### GET /api/creation-info

Obtenez les informations de base pour la création de personnages (classes, races, alignements, etc.).
• Réponse :

```json
 {
  "races": [
    "..."
  ],
  "classes": [
    "..."
  ],
  "alignments": [
    "..."
  ]
}
```

### GET /api/characters

Récupérez la liste des personnages créés.

• Réponse :

```json
{
  "data": [
    /* vos personnages */
  ],
  "success": true,
  "error": ""
}
```

### POST /api/characters

Créez un nouveau personnage.

• Payload :

```json
{
  "name": "Aragorn",
  "image": "http://example.com/aragorn.jpg",
  "race": "dragonborn",
  "alignment": "Lawful good",
  "attributes": {
    "strength": 18,
    "dexterity": 13,
    "constitution": 14,
    "intelligence": 10,
    "wisdom": 12,
    "charisma": 15
  },
  "classname": "barbarian"
}
```

• Réponse :

```json
{
  "data": {
    "_name": "Aragorn",
    "_image": "http://example.com/aragorn.jpg",
    "_race": {
      /* les informations de votre race */
    },
    "_alignment": {
      /* les informations de votre alignement */
    },
    "_attributes": {
      /* les attributs de votre personnage */
    },
    "_class": {
      /* les informations de votre classe */
    }
  },
  "success": true,
  "error": ""
}
```

## Exemples de Requête

### Récupération des informations de création :

```shell
curl -X GET http://localhost:3000/api/creation-info
```

### Création d’un personnage :

```shell
curl -X POST http://localhost:3000/api/characters -H "Content-Type: application/json" -d '{
   "name": "Aragorn",
   "image": "http://example.com/aragorn.jpg",
   "race": "dragonborn",
   "alignment": "Lawful good",
   "attributes": {
      "strength": 18,
      "dexterity": 13,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 15
   },
  "classname": "barbarian"
}'
```

#### En cas de requête mal formulés, vous serez amenés à recevoir ce type d'erreur:

Race non valide:

```json
{
  "error": "Race is not valid, choose one of the following: Dragonborn, Dwarf, Elf, Gnome, Half-Elf, Half-Orc, Halfling, Human, Tiefling"
}
```

Alignement non valide:

```json
{
  "error": "Alignment not valid, choose one of the following: Chaotic Evil, Chaotic Good, Chaotic Neutral, Lawful Evil, Lawful Good, Lawful Neutral, Neutral, Neutral Evil, Neutral Good"
}
```

Classe non valide:

```json
{
  "error": "Class is not valid, choose one of the following: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard"
}
```