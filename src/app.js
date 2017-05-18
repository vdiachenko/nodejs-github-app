import github from './github';

const username = process.argv[2];

async function getRepos(username) {
    try {
        const repos = await github.getRepos(username);
        
        if (!repos) {
            throw new Error('Что-то пошло не так...');
        }

        repos.forEach(repo => console.log(repo.name));
    } catch (err) {
        console.log(err.message);
    }
}

getRepos(username);
