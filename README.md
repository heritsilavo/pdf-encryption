```markdown
# PDF Encryption and Decryption Script

Ce projet fournit un script Node.js pour crypter et déchiffrer des fichiers PDF en utilisant la bibliothèque CryptoJS. Le script permet de protéger vos fichiers PDF sensibles en les cryptant avec un mot de passe.

## Prérequis

- Node.js (version 12 ou supérieure)
- npm (généralement inclus avec Node.js)

## Installation

1. Clonez le dépôt ou téléchargez les fichiers du projet.

   ```bash
   git clone https://github.com/heritsilavo/pdf-encryption.git
   cd pdf-encryption
   ```

2. Installez les dépendances nécessaires.

   ```bash
   npm install crypto-js
   ```

## Utilisation

### Crypter un fichier PDF

Pour crypter un fichier PDF, utilisez la commande suivante :

```bash
node encryptDecrypt.js encrypt chemin/vers/votre/fichier.pdf votre_mot_de_passe
```

### Déchiffrer un fichier PDF

Pour déchiffrer un fichier PDF crypté, utilisez la commande suivante :

```bash
node encryptDecrypt.js decrypt chemin/vers/votre/fichier.pdf.enc votre_mot_de_passe
```

### Exemples

1. **Crypter un fichier** :

   ```bash
   node encryptDecrypt.js encrypt document.pdf monMotDePasse
   ```

   Cela créera un fichier `document.pdf.enc` dans le même répertoire.

2. **Déchiffrer un fichier** :

   ```bash
   node encryptDecrypt.js decrypt document.pdf.enc monMotDePasse
   ```

   Cela créera un fichier `document.decrypted.pdf` dans le même répertoire.

## Fonctionnalités

- Crypter des fichiers PDF pour protéger leur contenu.
- Déchiffrer des fichiers PDF cryptés avec le mot de passe approprié.
- Utilisation simple via la ligne de commande.

## Remarques

- Assurez-vous d'utiliser un mot de passe fort pour garantir la sécurité de vos fichiers.
- Le script traite les fichiers PDF de manière binaire, donc évitez d'utiliser des fichiers texte ou d'autres formats non binaires.
- Les fichiers déchiffrés seront créés avec l'extension `.decrypted.pdf`.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.
```

### Instructions pour l'utilisation

1. **Créer le fichier** : Ouvrez votre éditeur de texte préféré et copiez le contenu ci-dessus.
2. **Enregistrer le fichier** : Enregistrez-le sous le nom `README.md` dans le répertoire de votre projet.

Ce fichier `README.md` fournit une documentation claire et concise pour les utilisateurs de votre script, leur permettant de comprendre rapidement comment l'installer et l'utiliser. N'hésitez pas à personnaliser les sections selon vos besoins spécifiques ou à ajouter des informations supplémentaires si nécessaire.