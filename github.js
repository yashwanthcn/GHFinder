class GitHub {
    constructor(){
        this.client_id = 'a063bcc0716334e5b226';
        this.client_secret = '6434a1922f0c7100fb215ca02e80712b33ed2baa';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}