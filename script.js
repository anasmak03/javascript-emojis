const myEmojis = ["👨‍💻", "⛷", "🍲"];

function selectEmo(){
    const emojieContainer = document.getElementById('emoji-container');
    emojieContainer.innerHTML = " ";
    for(let i=0; i<myEmojis.length;i++){
        const emojie = document.createElement('span')
        emojie.textContent = myEmojis[i]
        emojieContainer.append(emojie)
    }
}
selectEmo()

const pushe = document.getElementById('push-btn');
pushe.addEventListener("click", () =>{
    const emoinput = document.getElementById('emoji-input');
    if(emoinput.value)
    {
        myEmojis.push(emoinput.value)
        emoinput.value = " ";
        selectEmo()
    }
})




const unshiftt = document.getElementById('unshift-btn');
unshiftt.addEventListener("click", () =>{
    const emoinput = document.getElementById('emoji-input');
    if(emoinput.value)
    {
        myEmojis.unshift(emoinput.value)
        emoinput.value = " ";
        selectEmo()
    }
})



const popbtn = document.getElementById('pop-btn')
popbtn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input');
        myEmojis.pop(emoinput.value)
        selectEmo()
})


const shiftbrn = document.getElementById('shift-btn')
shiftbrn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input');
    myEmojis.shift(emoinput.value)
    selectEmo()
})