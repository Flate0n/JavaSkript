const inputElement = document.getElementById('title')
const creatBtn = document.getElementById('create')
const listElement = document.getElementById('list')
document.cookie = "username=John Doe; SameSite=Lax; Secure";

const notes =[{
    title : 'javaScript', 
    condition : false },
    {
    title : 'React', 
    condition : false }]

//console.log(inputElement.value)
function render (){
    listElement.innerHTML=''
    if (notes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length ; i++ ){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplete(notes[i], i))
    }   
}
function getNoteTemplete(notes , index){
return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class="${notes.condition ? 'text-decoration-line-through' : ''}">${notes.title}</span>
            <span>
                <span class="btn btn-small btn-${notes.condition ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger"data-index="${index}" data-type="remove">&times;</span>
            </span>
            </li>
        `
}
listElement.onclick = function(event){
    if (event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'toggle'){
            notes[index].condition = !notes[index].condition
        }
        else if (type === 'remove'){
            notes.splice(index,1)
        }
    }
    render()
}
render()
creatBtn.onclick = function(){
    if (inputElement.value.length === 0 ){
        return
    }
    const newNotes ={
        title : inputElement.value, 
        condition : false }
    notes.push(newNotes)
    listElement.insertAdjacentHTML('beforeend',getNoteTemplete(newNotes))
    inputElement.value = ' '
    render()
}
 