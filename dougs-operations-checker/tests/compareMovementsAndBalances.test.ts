import { compareMovementsAndBalances } from '../utils/compareMovementsAndBalances';
import { Movement, Balance } from '../types';

describe('compareMovementsAndBalances', () => {
  const movements: Movement[] = [
    { id: 1, date: new Date('2023-01-01'), label: 'Payment 1', amount: 100 },
    { id: 2, date: new Date('2023-01-02'), label: 'Payment 2', amount: 200 },
    { id: 3, date: new Date('2023-01-03'), label: 'Payment 3', amount: -50 },
  ];

  const balances: Balance[] = [
    { date: new Date('2023-01-01'), balance: 100 },
    { date: new Date('2023-01-02'), balance: 300 },
    { date: new Date('2023-01-03'), balance: 250 },
  ];

  it('should return an empty array if balances match movements', () => {
    const anomalies = compareMovementsAndBalances(movements, balances);
    expect(anomalies).toHaveLength(0);
  });

  it('should return anomalies if balances do not match movements', () => {
    const modifiedBalances: Balance[] = [
      { date: new Date('2023-01-01'), balance: 100 },
      { date: new Date('2023-01-02'), balance: 250 }, // Intentionally incorrect balance
      { date: new Date('2023-01-03'), balance: 200 }, // Intentionally incorrect balance
    ];

    const anomalies = compareMovementsAndBalances(movements, modifiedBalances);
    expect(anomalies).toHaveLength(2);
    expect(anomalies[0].difference).toBe(-50); // 250 - 300
    expect(anomalies[1].difference).toBe(-50); // 200 - 250
  });
});