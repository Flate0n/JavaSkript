const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")
const output = document.getElementById("output")

mode = 'time'
update()

setInterval(update,1000)

function update(){
    output.textContent = format(mode)
}
function format (dateMode){
    const now = new Date ()
    switch(dateMode){ 
        case 'full' : return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'date' : return now.toLocaleDateString()
        case 'time' : return now.toLocaleTimeString()
        default : return now.toLocaleTimeString()
}}


fullBtn.onclick = function(){
    mode = 'full'
    update()
}
dateBtn.onclick = function(){
    mode = 'date'
    update()
}
timeBtn.onclick = function(){
    mode = 'time'
    update()
}