const serverUrl = process.env.API_SERVER;

export const request = async (uri) => {
    const response = await fetch(`${serverUrl}${uri}`, { credentials: 'include' });
    return response.json();
};

export const requestPost = async (uri, { body }) => {
    const response = await fetch(`${serverUrl}${uri}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
    });
    return response.json();
};