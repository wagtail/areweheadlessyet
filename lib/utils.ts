/**
 * Extracts the year from a date in a string.
 * @param date - String representing a full date.
 * @returns - The year of the given date.
 */
const getYear = (date: string): number => {
    const dateObject = new Date(date);
    return dateObject.getFullYear();
};

/**
 * Formats a date to display.
 * @param date - String representing a full date.
 * @returns - A more user-friendly date format.
 */
const formatDate = (date: string) => {
    const dateObject = new Date(date);
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObject);
};

export { getYear, formatDate };
