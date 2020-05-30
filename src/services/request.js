const serverUrl = process.env.API_SERVER;

const commonOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
};

const mergeOptions = (a, b) => ({ ...a, ...b });

const generalRequest = async (url, options) => {
    const optionsToUse = mergeOptions(
        commonOptions,
        { 
            ...options, 
            body: options && options.body && JSON.stringify(options.body)
        }
    );
    const response = await fetch(`${serverUrl}${url}`, optionsToUse);
    return response.json();
};

export const request = generalRequest;

export const requestPUT = async (url, { body }) => {
    return generalRequest(url, {
        method: 'PUT',
        body
    });
};

export default {
    get: generalRequest,
    put: requestPUT,
};