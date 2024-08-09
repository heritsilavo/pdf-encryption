const fs = require('fs');
const CryptoJS = require('crypto-js');

// Fonction pour crypter un fichier
function encryptFile(filePath, password) {
    // Lire le contenu du fichier
    // fileData est de type Buffer
    const fileData = fs.readFileSync(filePath);

    //Convertir le type buffer en string
    const fileDataString = JSON.stringify(fileData)

    // Crypter le texte
    const encryptedData = CryptoJS.AES.encrypt(fileDataString, password).toString();
    
    // Écrire le contenu crypté dans un nouveau fichier
    fs.writeFileSync(`${filePath}.enc`, encryptedData);
}

function decryptFile(encryptedFilePath, password) {
    // Lire le contenu du fichier crypté
    const encryptedData = fs.readFileSync(encryptedFilePath, 'utf8');

    // Déchiffrer le contenu
    const bytes = CryptoJS.AES.decrypt(encryptedData, password);
    
    // Convertir les données déchiffrées en chaîne de caractères
    const decryptedDataString = bytes.toString(CryptoJS.enc.Utf8);

    // Convertir la chaîne de caractères en Buffer
    const buffer = Buffer.from(JSON.parse(decryptedDataString));


    // Écrire le contenu déchiffré dans un nouveau fichier
    fs.writeFileSync(encryptedFilePath.replace('.enc', '.decrypted.pdf'),buffer , { encoding: 'binary' });
    console.log('Fichier déchiffré avec succès :', encryptedFilePath.replace('.enc', '.decrypted.pdf'));
}

// Exemple d'utilisation
const action = process.argv[2];
const filePath = process.argv[3];
const password = process.argv[4];

if (action === 'encrypt') {
    encryptFile(filePath, password);
} else if (action === 'decrypt') {
    decryptFile(filePath, password);
} else {
    console.log('Utilisation : node encryptDecrypt.js [encrypt|decrypt] [filePath] [password]');
}