
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

/** API for Id */
   export const fetchDetailsById = async (id) => {
        try{
            const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
            const data = await response.json();
            return data
        }
        catch (err){
            console.log(err);
        }
    }
/** API for Id End*/

/** POST API */
export const onLoginUser = async (email, password) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const data = await response.json();
        return data; 
    }
    catch (err){
        console.log(err);
    }
}
/** POST API END */

/** Get Profile API */
export const getProfile = async(myToken) => {
    try{
        const resp = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            headers:{
                "Authorization":`Bearer ${myToken}`
            }
        })
        const data = await resp.json();
        return data
    }
    catch (err){
        console.log(err);
    }
  }
/** Get Profile API End */