/**
 * Extracts the year from a date in a string.
 * @param date - String representing a full date.
 * @returns - The year of the given date.
 */
const getYear = (date: string): number => {
    const dateObject = new Date(date);
    return dateObject.getFullYear();
};

export { getYear };
