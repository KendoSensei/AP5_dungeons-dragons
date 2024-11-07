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

### POST /characters

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
      "index": "dragonborn",
      "name": "Dragonborn",
      "url": "/api/races/dragonborn",
      "speed": 30,
      "ability_bonuses": [
        {
          "ability_score": {
            "index": "str",
            "name": "STR",
            "url": "/api/ability-scores/str"
          },
          "bonus": 2
        },
        {
          "ability_score": {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
          },
          "bonus": 1
        }
      ],
      "alignment": "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
      "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
      "size": "Medium",
      "size_description": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
      "starting_proficiencies": [],
      "languages": [
        {
          "index": "common",
          "name": "Common",
          "url": "/api/languages/common"
        },
        {
          "index": "draconic",
          "name": "Draconic",
          "url": "/api/languages/draconic"
        }
      ],
      "language_desc": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
      "traits": [
        {
          "index": "draconic-ancestry",
          "name": "Draconic Ancestry",
          "url": "/api/traits/draconic-ancestry"
        },
        {
          "index": "breath-weapon",
          "name": "Breath Weapon",
          "url": "/api/traits/breath-weapon"
        },
        {
          "index": "damage-resistance",
          "name": "Damage Resistance",
          "url": "/api/traits/damage-resistance"
        }
      ],
      "subraces": []
    },
    "_alignment": {
      "_morale": "good",
      "_order": "Lawful"
    },
    "_attributes": {
      "_strength": 18,
      "_dexterity": 13,
      "_constitution": 14,
      "_intelligence": 10,
      "_wisdom": 12,
      "_charisma": 15
    },
    "_class": {
      "id": "barbarian",
      "_name": "Barbarian",
      "_hitDie": 12,
      "_classLevels": "/api/classes/barbarian/levels",
      "_multiClassing": {
        "prerequisites": [
          {
            "ability_score": {
              "index": "str",
              "name": "STR",
              "url": "/api/ability-scores/str"
            },
            "minimum_score": 13
          }
        ],
        "proficiencies": [
          {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
          },
          {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
          },
          {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "url": "/api/proficiencies/martial-weapons"
          }
        ]
      },
      "_startingEquipment": [
        {
          "equipment": {
            "index": "explorers-pack",
            "name": "Explorer's Pack",
            "url": "/api/equipment/explorers-pack"
          },
          "quantity": 1
        },
        {
          "equipment": {
            "index": "javelin",
            "name": "Javelin",
            "url": "/api/equipment/javelin"
          },
          "quantity": 4
        }
      ],
      "_startingEquipmentOptions": [
        {
          "desc": "(a) a greataxe or (b) any martial melee weapon",
          "choose": 1,
          "type": "equipment",
          "from": {
            "option_set_type": "options_array",
            "options": [
              {
                "option_type": "counted_reference",
                "count": 1,
                "of": {
                  "index": "greataxe",
                  "name": "Greataxe",
                  "url": "/api/equipment/greataxe"
                }
              },
              {
                "option_type": "choice",
                "choice": {
                  "desc": "any martial melee weapon",
                  "choose": 1,
                  "type": "equipment",
                  "from": {
                    "option_set_type": "equipment_category",
                    "equipment_category": {
                      "index": "martial-melee-weapons",
                      "name": "Martial Melee Weapons",
                      "url": "/api/equipment-categories/martial-melee-weapons"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "desc": "(a) two handaxes or (b) any simple weapon",
          "choose": 1,
          "type": "equipment",
          "from": {
            "option_set_type": "options_array",
            "options": [
              {
                "option_type": "counted_reference",
                "count": 2,
                "of": {
                  "index": "handaxe",
                  "name": "Handaxe",
                  "url": "/api/equipment/handaxe"
                }
              },
              {
                "option_type": "choice",
                "choice": {
                  "desc": "any simple weapon",
                  "choose": 1,
                  "type": "equipment",
                  "from": {
                    "option_set_type": "equipment_category",
                    "equipment_category": {
                      "index": "simple-weapons",
                      "name": "Simple Weapons",
                      "url": "/api/equipment-categories/simple-weapons"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "_proficiencyChoices": [
        {
          "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
          "choose": 2,
          "type": "proficiencies",
          "from": {
            "option_set_type": "options_array",
            "options": [
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-animal-handling",
                  "name": "Skill: Animal Handling",
                  "url": "/api/proficiencies/skill-animal-handling"
                }
              },
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-athletics",
                  "name": "Skill: Athletics",
                  "url": "/api/proficiencies/skill-athletics"
                }
              },
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-intimidation",
                  "name": "Skill: Intimidation",
                  "url": "/api/proficiencies/skill-intimidation"
                }
              },
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-nature",
                  "name": "Skill: Nature",
                  "url": "/api/proficiencies/skill-nature"
                }
              },
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-perception",
                  "name": "Skill: Perception",
                  "url": "/api/proficiencies/skill-perception"
                }
              },
              {
                "option_type": "reference",
                "item": {
                  "index": "skill-survival",
                  "name": "Skill: Survival",
                  "url": "/api/proficiencies/skill-survival"
                }
              }
            ]
          }
        }
      ],
      "_proficiencies": [
        {
          "index": "light-armor",
          "name": "Light Armor",
          "url": "/api/proficiencies/light-armor"
        },
        {
          "index": "medium-armor",
          "name": "Medium Armor",
          "url": "/api/proficiencies/medium-armor"
        },
        {
          "index": "shields",
          "name": "Shields",
          "url": "/api/proficiencies/shields"
        },
        {
          "index": "simple-weapons",
          "name": "Simple Weapons",
          "url": "/api/proficiencies/simple-weapons"
        },
        {
          "index": "martial-weapons",
          "name": "Martial Weapons",
          "url": "/api/proficiencies/martial-weapons"
        },
        {
          "index": "saving-throw-str",
          "name": "Saving Throw: STR",
          "url": "/api/proficiencies/saving-throw-str"
        },
        {
          "index": "saving-throw-con",
          "name": "Saving Throw: CON",
          "url": "/api/proficiencies/saving-throw-con"
        }
      ],
      "_subclasses": [
        {
          "id": "berserker",
          "_name": "Barbarian",
          "index": "berserker",
          "url": "/api/subclasses/berserker"
        }
      ]
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