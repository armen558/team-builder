export const fetchCompanies = () => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/companies')
        .then(resp => resp.json())
        .then(data => data)
};

export const loginRequest = (email, password) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(resp => resp)
};

export const registerRequest = (userData) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(resp => resp)
};

export const logoutRequest = (token) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/logout', {
        method: 'GET',
        headers: {
            token,
        }
    }).then(resp => resp)
};

export const getUser = (token) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users', {
        method: 'GET',
        headers: {
            token,
        }
    }).then(resp => resp)
};

export const fetchTopicsReguest = (token) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics', {
        method: 'GET',
        headers: {
            token,
            // Origin: 'http://localhost:3000/',
            'Content-Type': 'application/json',
        }
    }).then(resp => resp)
}

export const addTopicRequest = (token, title) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics', {
        method: 'POST',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title
        })

    }).then(resp => resp)
};

export const voteTopicRequest = (token, type, id) => {
    return fetch(`https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${id}/voting`, {
        method: 'POST',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type
        })
    }).then(resp => resp)
};

export const deleteTopicRequest = (token, id) => {
    return fetch(`https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${id}`, {
        method: 'DELETE',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
    }).then(resp => resp)
};

export const fetchTeamsRequest = (token) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/teams', {
        method: 'GET',
        headers: {
            token,
            'Content-Type': 'application/json',
        }
    }).then(resp => resp)
};

export const fetchProjectsRequest = (token) => {
    return fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects', {
        method: 'GET',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
    }).then(resp => resp)
};

export const voteProjectsRequest = (token, type, id) => {
    return fetch(`https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects/${id}/voting`, {
        method: 'POST',
        headers: {
            token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type
        })
    }).then(resp => resp)
};