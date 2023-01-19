import format from "date-fns/format";

function formatDate(time) {
  return format(Date.parse(time), "MMMM do, yyyy");
}

function formatContent(str) {
  if (str.length > 100) {
    const newString = str.slice(0, 101);
    return `${newString}...`;
  }

  return str;
}

export default { formatDate, formatContent };
