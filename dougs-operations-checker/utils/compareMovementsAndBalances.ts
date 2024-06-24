import { Movement, Balance, Anomaly } from '../types';
import { formatReadableDate } from './formatDate';

export function compareMovementsAndBalances(movements: Movement[], balances: Balance[]): Anomaly[] {
  const anomalies: Anomaly[] = [];
  let totalBalance = 0;
  const cumulativeMovements: Movement[] = [];
  let previousDate = new Date(balances[0].date);

  for (let i = 0; i < balances.length; i++) {
    const balance = balances[i];
    const balanceDate = new Date(balance.date);

    const relevantMovements: Movement[] = [];

    for (let j = 0; j < movements.length; j++) {
      const mov = movements[j];
      const movementDate = new Date(mov.date);
      
      let isCumulative = false;
      for (let k = 0; k < cumulativeMovements.length; k++) {
        if (cumulativeMovements[k].id === mov.id) {
          isCumulative = true;
          break;
        }
      }

      if (movementDate <= balanceDate && !isCumulative) {
        relevantMovements.push(mov);
      }
    }

    for (let j = 0; j < relevantMovements.length; j++) {
      cumulativeMovements.push(relevantMovements[j]);
      totalBalance += relevantMovements[j].amount;
    }

    if (totalBalance !== balance.balance) {
      const difference = balance.balance - totalBalance;
      anomalies.push({
        date: formatReadableDate(balance.date),
        expected: balance.balance,
        actual: totalBalance,
        difference: difference,
        movements: [...relevantMovements],
        missingTransactions: `Il manque une ou plusieurs transactions d'une valeur de ${difference.toFixed(2)}€ au total entre les dates de ${formatReadableDate(previousDate.toISOString())} à ${formatReadableDate(balance.date)}`
      });
    }

    previousDate = balanceDate;
  }

  return anomalies;
}
