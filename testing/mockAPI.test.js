/**
 * Mocking getList controller function
 * Testing Fetching data from API by using A fake JSON file 
 * JSON file has a real response that fetched for one time 
 * with static date which is 2020-10-14
 */

const mockRes = require('./fake_api.json');

exports.getList = (req, res, next) => {
    const resObj = {};

    for (let i of mockRes.items) {
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

}