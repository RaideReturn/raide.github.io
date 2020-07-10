function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let n = Math.floor(Math.random() * Math.floor(36));
  return `#slot-${n}`;
}
