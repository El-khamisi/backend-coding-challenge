const leaderboard = document.getElementById('leaderboard-body');
const btn = document.getElementById('leaderboard-header');

const languageCard = (name, count) => {
    return `
    <article class="leaderboard__profile">
        <span class="leaderboard__name">${name}</span>
        <span class="leaderboard__value">${count}<span>repositories</span></span>
        <div class="leaderboard__descripto">askdljfa;sljdf;lsjssssssssssssssssssssssssssssssssssssssssssdf</div>
     </article>`;
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
            for (const language in data) {

                const name = language;
                const count = data[language].count;
                leaderboard.insertAdjacentHTML('beforeend', languageCard(name, count));

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