
/** API */
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
/** API END */

/** POST API */
export const onLoginUser = async (email, password) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'post',
            body: JSON.stringify({email, password})
        })
        const data = await response.json()
        return data; 
    }
    catch (err){
        console.log(err);
    }
}
/** POST API END */