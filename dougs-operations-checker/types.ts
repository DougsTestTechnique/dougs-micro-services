export interface Movement {
    id: string;
    date: string;
    label: string;
    amount: number;
  }
  
  export interface Balance {
    date: string;
    balance: number;
  }
  
  export interface Anomaly {
    date: string;
    expected: number;
    actual: number;
    difference: number;
    movements: Movement[];
    missingTransactions?: string;
  }
  