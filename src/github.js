import axios from 'axios';

const https = require('https');

async function getRepos(username) {
    try {
        if (!username) {
            throw new Error('Необходимо указать имя пользователя');
        }

        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        
        return data;    
    } catch (err) {
        console.error(err.message);
    }
}

export default { getRepos }; 
