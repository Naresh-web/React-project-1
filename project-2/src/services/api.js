

export const api = async (apiUrl) => {
    try{
        const response = await fetch(apiUrl);
        const data = response.json()
        return data;
    }
    catch (err){
        console.log(err);
    }
}