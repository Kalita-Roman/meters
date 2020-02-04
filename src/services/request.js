export const request = async (uri) => {
    const response = await fetch(`${process.env.API_SERVER}${uri}`, { credentials: 'include' });
    return response.json();
};