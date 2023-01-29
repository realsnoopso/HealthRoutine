export function getRecordsLength(id: number) {
  const record = window?.localStorage.getItem(id.toString());
  if (record) {
    return JSON.parse(record).logs.length;
  } else {
    return 0;
  }
}
