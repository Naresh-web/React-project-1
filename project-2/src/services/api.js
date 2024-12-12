

export const api = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = response.json()
    return data;
}