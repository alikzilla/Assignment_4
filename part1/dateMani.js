function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
  
function addDaysToDate(date, daysToAdd) {
    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() + daysToAdd);
    return resultDate;
}

const today = new Date();
const formattedDate = formatDate(today);
const newDate = addDaysToDate(formattedDate, 7);
console.log(`Formatted date: ${formattedDate}`);
console.log(`Formatted date: ${newDate}`);
