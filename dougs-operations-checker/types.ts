export interface Movement {
    id: string;
    date: string;
    label: string;
    amount: number;
  }
  
  export interface Balance {
    date: Date;
    balance: number;
  }
  
  export interface Anomaly {
    date: Date;
    expected: number;
    actual: number;
    difference: number;
    movements: Movement[];
    message?: string;
  }
  