import { formatDuration } from "date-fns"

export function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}
