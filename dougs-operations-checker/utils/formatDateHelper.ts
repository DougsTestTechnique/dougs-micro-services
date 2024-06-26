export function formatReadableDate(isoDate: Date): string {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('fr-FR');
    return formattedDate;
  }
  