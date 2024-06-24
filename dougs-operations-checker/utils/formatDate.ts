export function formatReadableDate(isoDate: string): string {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('fr-FR');
    return formattedDate;
  }
  