import { Movement, Balance, Anomaly } from '../types';
import { formatReadableDate } from './formatDateHelper';

// Function to filter relevant movements for a given balance date
function getRelevantMovements(movements: Movement[], cumulativeMovements: Movement[], balanceDate: Date): Movement[] {
  return movements.filter(mov => {
    const movementDate = new Date(mov.date);
    const isCumulative = cumulativeMovements.some(cumMov => cumMov.id === mov.id);
    return movementDate <= balanceDate && !isCumulative;
  });
}

// Function to update the cumulative movements and total balance
function updateCumulativeMovementsAndTotalBalance(cumulativeMovements: Movement[], relevantMovements: Movement[]): number {
  relevantMovements.forEach(mov => cumulativeMovements.push(mov));
  return relevantMovements.reduce((total, mov) => total + mov.amount, 0);
}

// Function to create anomaly object
function createAnomaly(balance: Balance, totalBalance: number, relevantMovements: Movement[], previousDate: Date): Anomaly {
  const difference = balance.balance - totalBalance;
  return {
    date: balance.date,
    expected: balance.balance,
    actual: totalBalance,
    difference: difference,
    movements: [...relevantMovements],
    message: `Il manque une ou plusieurs transactions d'une valeur de ${difference.toFixed(2)}€ au total entre les dates de ${formatReadableDate(previousDate)} à ${formatReadableDate(balance.date)}`
  };
}

// Main function to compare movements and balances
export function compareMovementsAndBalances(movements: Movement[], balances: Balance[]): Anomaly[] {
  const anomalies: Anomaly[] = [];
  let totalBalance = 0;
  const cumulativeMovements: Movement[] = [];
  let previousDate = new Date(balances[0].date);

  balances.forEach(balance => {
    const balanceDate = new Date(balance.date);

    const relevantMovements = getRelevantMovements(movements, cumulativeMovements, balanceDate);
    totalBalance += updateCumulativeMovementsAndTotalBalance(cumulativeMovements, relevantMovements);

    if (totalBalance !== balance.balance) {
      anomalies.push(createAnomaly(balance, totalBalance, relevantMovements, previousDate));
    }

    previousDate = balanceDate;
  });

  return anomalies;
}
