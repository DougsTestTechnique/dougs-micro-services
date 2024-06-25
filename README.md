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
- lint:fix: Analyse et corrige automatiquement les problèmes de style de code.

yarn dev

yarn generate-test-data

yarn package

yarn lint:fix

## Choix des paquet

### Dépendances de développement

- @types/aws-lambda: Fournit les types TypeScript pour AWS Lambda, permettant une meilleure autocomplétion et vérification des types.
- serverless: Le framework Serverless, utilisé pour déployer et gérer les fonctions Lambda et autres ressources AWS.
- serverless-bundle: Un plugin Serverless qui simplifie la configuration de Webpack, TypeScript, ESLint, et Jest. Il permet de gérer efficacement le bundling, le linting et le testing.
- serverless-offline: Permet de simuler les fonctions Lambda et les API Gateway localement, facilitant ainsi le développement et le test sans avoir besoin de déployer sur AWS.
- @faker-js/faker: Utilisé pour générer des données factices réalistes pour les tests.

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

```bash
serverless deploy

**Licence**

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

