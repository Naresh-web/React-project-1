import React, {useEffect, useState} from 'react'
import { FetchList, FetchDataById } from '../services/utils';

const RandomPage = () => {
    const [list, setList] = useState([]);

    const fetchMyList = async () => {
        const resp = await FetchList();
        if (resp){
            setList(resp);
        }
    }
    console.log(list);
    const fetchDataById = async (id) => {
        const resp = await FetchDataById(id, list);
        console.log(resp);
    }

    useEffect(()=>{
        fetchMyList();
    }, [])
  return (
    <>
        <div>{list.map((item) => (
            <button key={item.id} onClick={() => fetchDataById(item.id)}>{item.id}</button>
        ))}</div>
    </>
  )
}

export default RandomPage;