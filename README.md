# Dougs Operations Checker

## Introduction

`dougs-micro-services` est un projet Serverless conçu pour démontrer la capacité à configurer et déployer des fonctions Lambda sur AWS. Ce projet utilise Node.js et divers paquets pour faciliter le développement, le test et le déploiement des fonctions Lambda. Il est construit sous une architecture micro-services, permettant de rassembler uniquement certaines fonctionnalités dans des services isolés. Cela permet une meilleure collaboration sur le projet, et également une maintenance plus facile. Dans cet exemple, un micro-service a été créé afin de répondre à un test technique soumis par l'équipe technique de Dougs.

## Prérequis

- Node.js >= 20.10.0
- Serverless Framework
- Un compte AWS configuré avec les bonnes permissions

## Installation

Clonez le dépôt et installez les dépendances :

bash

Copy code

git clone <URL\_DU\_DEPOT>

cd dougs-operations-checker

yarn install

## Scripts

Voici les scripts disponibles pour gérer le projet :

- dev: Lance le projet en mode développement avec Serverless Offline.
- generate-test-data: Génère des données de test en utilisant Faker.js.
- package: Prépare le projet pour le déploiement en packagant les fichiers nécessaires.
- lint : Analyse les problèmes de style de code.
- jest : Permet de tester le code

yarn dev

yarn generate-test-data

yarn package

yarn lint

yarn jest

## Choix des paquet

### Dépendances de développement

- @faker-js/faker: Une bibliothèque permettant de générer des données de test réalistes et aléatoires. Utilisée pour simuler des données telles que des noms, des adresses, des dates, et bien plus encore, ce qui est très utile pour le développement et les tests.
- @types/aws-lambda: Fournit les définitions de type TypeScript pour AWS Lambda. Cela aide à bénéficier de l'auto-complétion et de la vérification des types lors de l'écriture de fonctions Lambda avec TypeScript.
- @types/jest: Contient les définitions de type TypeScript pour Jest, un framework de test JavaScript. Cela permet une intégration fluide avec TypeScript pour l'écriture et l'exécution de tests unitaires.
- jest: Un framework de test JavaScript utilisé pour les tests unitaires et les tests d'intégration. Jest offre un environnement de test complet avec des assertions intégrées, des rapports de couverture de code, et des capacités de moquerie.
- serverless: Un framework pour déployer des applications sans serveur. Il permet de gérer l'infrastructure cloud de manière déclarative, simplifiant ainsi le développement et le déploiement des fonctions Lambda, des API Gateway, et d'autres ressources AWS.
- serverless-bundle: Un plugin pour le framework Serverless qui simplifie la configuration et l'utilisation de Webpack pour empaqueter les fonctions Lambda. Il inclut également des outils pour les tests et le linting.
- serverless-offline: Un plugin pour le framework Serverless qui permet de simuler l'environnement AWS Lambda localement. Utile pour le développement et le test des fonctions Lambda sans avoir besoin de déployer sur AWS.
- ts-jest: Un préprocesseur Jest pour TypeScript. Il permet à Jest de comprendre et de transformer les fichiers TypeScript, facilitant ainsi l'écriture de tests pour les applications TypeScript.

### Dépendances

- aws-lambda: Paquet officiel AWS pour travailler avec Lambda dans Node.js.
- lambda-log: Un utilitaire de journalisation simple et efficace pour les fonctions Lambda, facilitant le suivi et le débogage.

## Utilisation

### Développement Local

Pour développer localement, utilisez le script dev :

Copy code

yarn dev

Cela lancera Serverless Offline et vous permettra de tester vos fonctions Lambda localement.

**Génération de Données de Test**

Pour générer des données de test, utilisez le script generate-test-data :

yarn generate-test-data

**Packager le Projet**

Pour préparer le projet pour le déploiement, utilisez le script package :

yarn package

**Linting**

Pour analyser et corriger les problèmes de style de code, utilisez le script lint:fix :

yarn lint:fix

## Déploiement

Pour déployer le projet sur AWS, vous devez configurer vos credentials AWS et utiliser le framework Serverless. Cependant, le déploiement est automatisé via GitHub Actions.

### Déploiement Automatisé avec GitHub Actions

Le déploiement est géré par un workflow GitHub Actions défini dans le fichier `.github/workflows/dougs-operations-checker-staging.yml`. Ce fichier contient les étapes nécessaires pour déployer le projet sur l'environnement de staging.

Pour déclencher le déploiement, vous devez pousser vos modifications sur la branche principale ou une branche spécifiée dans le fichier de workflow.

Il faut ensuite ce rendre dans `Actions > Dougs Operations Checher ${stage} > Run workflow`

### Configuration des Credentials AWS

Assurez-vous que vos credentials AWS sont configurés dans les secrets de votre dépôt GitHub. Vous pouvez les ajouter dans les paramètres de votre dépôt sous `Settings > Secrets and variables > Actions`.

Les secrets nécessaires sont :

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Commande de Déploiement Manuelle

Si vous souhaitez déployer manuellement, vous pouvez utiliser la commande suivante après avoir configuré vos credentials AWS localement :

bash
serverless deploy

### Pour Aller Plus Loin

Les améliorations sur ce projet de test sont nombreuses

1) Un meilleur moteur de recherche d'anomalies et de doublons, plus polyvalent

2) Des tests plus avancées avec JEST

3) L'utilisation de opentofu (https://opentofu.org/) fork de Terraform, outil open-source d'infrastructure qui permet de définir des ressources cloud et on-premises dans des fichiers de configuration.

4) La sécurisation via CORS provenant du front-end

**Licence**

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

