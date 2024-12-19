
export const FetchList = async () => {
    try{
        const myList = [
            {id:1, name: 'Anji', age: 28},
            {id: 2, name: 'Naresh', age: 26},
            {id: 3, name: 'Sundeep', age: 24}
        ];
        return myList;
    }
    catch (err){
        console.log(err);
    }
}

export const FetchDataById = async (id, data) => {
    try {
        const resp = await data.filter((item) => item.id === id);
        return resp;
    } catch (error) {
        console.log(error);
    }
}