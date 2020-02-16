const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");
const parrot = document.querySelector(".parrot");

const cat_text = document.querySelector("#cat_wrapper");
const dog_text = document.querySelector("#dog_wrapper");
const parrot_text = document.querySelector("#parrot_wrapper");


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})
let sum_voice = 0;
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)
const progress = document.querySelector('.progress-bar')

console.log('%O', progress)
ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = ({data}) => {
	info = JSON.parse(data);
    sum_voice = 0;
    for(key in info){
    	sum_voice += info[key];
    }
    cat.setAttribute('aria-valuemax', sum_voice);
    dog.setAttribute('aria-valuemax', sum_voice);
    parrot.setAttribute('aria-valuemax', sum_voice);
    cat.style.cssText = `width: ${info["cats"]*100/sum_voice}%;`;
    cat_text.innerHTML =`Коты: ${info["cats"]}`
    dog.style.cssText = `width: ${info["dogs"]*100/sum_voice}%;`;
    dog_text.innerHTML =`Собак: ${info["dogs"]}`
    parrot.style.cssText = `width: ${info["parrots"]*100/sum_voice}%;`;
    parrot_text.innerHTML =`Попугаев: ${info["parrots"]}`

    console.log(sum_voice);
}
