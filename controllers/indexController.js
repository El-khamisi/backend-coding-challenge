const path = require('path');
const fetch = require('node-fetch');

/**
 * ------------- Home Page  -------------
 * 
 */
exports.getHome = (req, res, next) => {
    res.sendFile(path.resolve('view/index.html'));
};

/**
 * -------- Request a new list of reposetires ---------
 *
 */
exports.getList = async(req, res, next) => {
    const date = new Date();
    const dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getDate();

    /**
     * Subtract 30 days from now Date and decrement month if needed
     */
    dateMonth = dateDay > 30 ? dateMonth : (dateMonth == 1 ? 12 : dateMonth - 1);
    dateDay = dateDay % 31;
    dateDay = dateDay == 0 ? 1 : dateDay;

    const fullData = `${dateYear}-${dateMonth}-${dateDay}`;
        const reqAPI = `https://api.github.com/search/repositories` +
                        `?q=created:>${fullData}&sort=stars&order=desc&per_page=100`;

    const response = await fetch(reqAPI)
        .then(data => {
            if (!data.ok)
                throw new Error('The response was not OK');
            return data.json();
        }).then(data => {
            /**
             * ------- Object schema --------
             * resObj = {
             *      javascript:{
             *          count: 12,
             *          repos: []
             *      }
             * }
             */
            const resObj = {};

            for (let i of data.items) {
                const language = i.language;
                if (language in resObj) {
            
                    resObj[language].count++;
                    resObj[language].repos.push(i.name);
                } else {
                    resObj[language] = {
                        count: 1,
                        repos: [i.name]
                    }
                    
                }
            }

            res.json(resObj);
        }).catch(error =>{
            res.json({msg: `${error}`})
        })

};