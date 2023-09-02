module.exports = (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const data = rows
        .filter(filterValid)
        .map(removePonctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase())
        .map(word => word.replace("\"", ""))
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

function filterValid(row) {
  const notANumber = !parseInt(row.trim());
  const notEmpty = !!row.trim();
  const notInterval = !row.includes("-->");
  return notANumber && notEmpty && notInterval;
}

function removePonctuation(row) {
  return row.replace(/[,?!:;.']/g, "");
}

function removeTags(row) {
return row.replace(/(<[^>]+)>/g).trim();

}

function mergeRows(fullText, rowText) {
  return `${fullText} ${rowText}`;
}
