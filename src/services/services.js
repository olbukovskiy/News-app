import format from "date-fns/format";
import Highlighter from "react-highlight-words";

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
