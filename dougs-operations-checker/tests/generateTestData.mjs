import fs from 'fs';
import { faker } from '@faker-js/faker';

// Générer des mouvements (transactions)
const generateMovements = (count) => {
  let movements = [];
  for (let i = 0; i < count; i++) {
    let movement = {
      id: i + 1,
      date: faker.date.past().toISOString(),
      label: faker.commerce.productName(),
      amount: parseFloat(faker.finance.amount())
    };
    movements.push(movement);
  }
  return movements.sort((a, b) => new Date(a.date) - new Date(b.date)); // Trier les mouvements par date
};

// Générer des balances (relevés bancaires)
const generateBalances = (count, startDate) => {
  let balances = [];
  let currentBalance = 0;
  let currentDate = new Date(startDate);

  for (let i = 0; i < count; i++) {
    currentDate.setDate(currentDate.getDate() + 1); // Avancer la date d'un jour à chaque itération
    currentBalance += parseFloat(faker.finance.amount());

    let balance = {
      date: currentDate.toISOString(),
      balance: currentBalance
    };

    balances.push(balance);
  }
  return balances;
};

// Nombre de mouvements et de balances à générer
const numberOfMovements = 10;
const numberOfBalances = 5;

// Générer les données
const movementsData = generateMovements(numberOfMovements);
const startDate = movementsData[0].date; // Utiliser la date du premier mouvement comme date de départ
const balancesData = generateBalances(numberOfBalances, startDate);

// Écrire les données dans des fichiers JSON
fs.writeFileSync('./movements.json', JSON.stringify(movementsData, null, 2));
fs.writeFileSync('./balances.json', JSON.stringify(balancesData, null, 2));

console.log('Données générées avec succès dans movements.json et balances.json');
