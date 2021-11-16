const leaderboard = document.getElementById('leaderboard-body');
const btn = document.getElementById('leaderboard-header');

const languageCard = (name, count, repos) => {

    const card = document.createElement('article');
    card.className = 'leaderboard__profile';

    card.innerHTML = `
    <article class="leaderboard__profile">
        <span class="leaderboard__name">${name}</span>
        <span class="leaderboard__value">${count}<span>repositories</span></span>`;
    
    const descripto = document.createElement('div');
    descripto.className = 'leaderboard__descripto';

    descripto.innerHTML = repos.forEach(e =>{
        `<li>${e}</li>`
    });

    card.appendChild(descripto);

    return card;
};




/**
 * 
 * -------- Logic Actions ------ 
 */



/**
 * 
 * @param {String} URL A string URL you going to use for fetching repositories 
 */
const getData = async ()=> {
    leaderboard.innerHTML = '<h1>  Featching Please Wait .....</h1>';


    const URL = '/list';
    const response = await fetch(URL)
        .then(res => {
            if (!res.ok)
                throw new Error('The response was not OK');

            return res.json();
        }).then(data => {

            //Reset innerHtml
            leaderboard.innerHTML = ''; 

            //Loop over every language in data object and create a separate card for each of them
            for (const language in data) {

                const name = language;
                const count = data[name].count;
                const repos = data[name].repos;
                leaderboard.insertAdjacentHTML('beforeend', languageCard(name, count, repos));

            }

            document.querySelectorAll('.leaderboard__profile').forEach((element) => {
                element.addEventListener('mouseup', showSublist);
            })
            
            
        }).catch((error) => {
            alert(error)
        });

}





const showSublist = e =>{
    const child = document.querySelector('.leaderboard__descripto');
    child.style.display = 'block';
}

const hideSublist = e =>{

    const border = leaderboard.getClientRects()[0];
    const borderX = e.clientX < border.left || e.clientX > border.right; 
    const borderY = e.clientY < border.top  || e.clientY > border.bottom;
    
    if(borderX || borderY){
        document.querySelector('.leaderboard__descripto').style.display = 'none';
    }
}


btn.addEventListener('mouseup', getData);
document.addEventListener('mouseup', hideSublist);