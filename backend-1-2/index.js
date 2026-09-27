require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;

const githubData = {
    "login": "Async-v",
    "id": 226234714,
    "node_id": "U_kgDODXwRWg",
    "avatar_url": "https://avatars.githubusercontent.com/u/226234714?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Async-v",
    "html_url": "https://github.com/Async-v",
    "followers_url": "https://api.github.com/users/Async-v/followers",
    "following_url": "https://api.github.com/users/Async-v/following{/other_user}",
    "gists_url": "https://api.github.com/users/Async-v/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Async-v/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Async-v/subscriptions",
    "organizations_url": "https://api.github.com/users/Async-v/orgs",
    "repos_url": "https://api.github.com/users/Async-v/repos",
    "events_url": "https://api.github.com/users/Async-v/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Async-v/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "ASYNC",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 28,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2025-08-13T05:12:56Z",
    "updated_at": "2026-09-16T10:25:55Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('hello twitter');
})

app.get('/youtube', (req, res) => {
    res.send("<h1>Hello i'm youtube</h1>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});