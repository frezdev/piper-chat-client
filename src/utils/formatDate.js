export function formatDate (timestamp) {
  const now = new Date()
  const date = new Date(timestamp)

  const timeDiff = now.getTime() - date.getTime()
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))

  if (dayDiff <= 0) {
    return date.toLocaleTimeString(['es-CO'], { hour: '2-digit', minute: '2-digit' }) // Hoy: hh:mm
  } else if (dayDiff === 1) {
    return 'Ayer'
  } else if (dayDiff >= 2 && dayDiff < 7) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    return daysOfWeek[date.getDay()]
  } else {
    return date.toLocaleDateString(['es-CO'], { year: '2-digit', month: '2-digit', day: '2-digit' })
  }
}
