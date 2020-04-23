export function getCurrentDateString() {
  const date = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString(undefined, dateOptions);
  return stripDayOfWeek(currentDate);
}

function stripDayOfWeek(dateString) {
  const beginning = dateString.indexOf(' ') + 1;
  return dateString.substring(beginning);
}
