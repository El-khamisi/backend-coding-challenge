const leaderboard = document.getElementById('leaderboard-body');
const btn = document.getElementById('leaderboard-header');
const prof = document.getElementById('leaderboard__profiles');

let obj = {};
async function getData(url = '') {
    console.log(url);
    const response = await fetch(url)
        .then(res => {
            if (!res.ok)
                throw new Error('The response was not OK');

            return res.json();
        }).then(data => {
        leaderboard.innerHTML = '';
            for(const language in data){

               leaderboard.insertAdjacentHTML('beforeend',`<main class="leaderboard__profiles">
                    <article class="leaderboard__profile">
                        <span class="leaderboard__name">${language}</span>
                        <span class="leaderboard__value">${data[language].count}<span>repositories</span></span>
                     </article>
                    </main>`);
       
            }
        }).catch((error) => {
            alert(error)
        });
}





btn.addEventListener('mouseup', (e) => {
    leaderboard.innerHTML = '<h1>Featching Please Wait .....</h1>';
    getData('/list');
});

prof.addEventListener('mouseup', (e)=>{
    prof.document.getElementById('')
})