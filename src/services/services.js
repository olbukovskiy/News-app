import format from "date-fns/format";
import Highlighter from "react-highlight-words";

function formatDate(time) {
  return format(Date.parse(time), "MMMM do, yyyy");
}

function formatContent(str) {
  const trimmedString = str.trim();
  if (trimmedString.length > 100) {
    const newString = trimmedString.slice(0, 101).trim();
    return `${newString}...`;
  }

  return trimmedString;
}

function highlightSearchResults(query, highlightedContent) {
  const searchQueryArray = query.split(" ");
  return (
    <Highlighter
      searchWords={searchQueryArray}
      autoEscape={true}
      textToHighlight={highlightedContent}
    />
  );
}

const services = { formatDate, formatContent, highlightSearchResults };

export default services;
