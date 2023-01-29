import { workoutList } from "@src/constants/mockData"

function getRound(id:string) {
  const record =  window?.localStorage.getItem(id)
  return record ? JSON.parse(record).round : 0
}

export function unfinishedWorkoutRecords() {
  const filteredList = workoutList.filter(v => v.totalRounds > getRound(v.id))
  const records = filteredList.map(v=>{return {id: v.id, round: getRound(v.id)}})
  return records;
}