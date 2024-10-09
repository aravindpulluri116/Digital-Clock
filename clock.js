function updateclock(){
    let now = new Date()
    let hours = now.getHours()
    let m = hours>=12 ? "pm" : "am"
    hours= hours%12 || 12
    hours= hours.toString().padStart(2,0)
    let minutes = now.getMinutes().toString().padStart(2,0)
    let seconds = now.getSeconds().toString().padStart(2,0)
    let time = `${hours}:${minutes}:${seconds} ${m}`
    document.getElementById("clock").textContent=time
}
updateclock()
setInterval(updateclock,1000)