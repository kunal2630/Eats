
import {useState, useEffect } from 'react';
import {res_item_api} from './api';

const useRestaurantItemList =(resId) => {

    const [resList,setReslist]=useState(null);


    useEffect(()=>{

        fetchList();

    },[]);

    const fetchList= async () =>{

        const list=await fetch(res_item_api+resId);
        const json=await list.json();
        setReslist(json.data);
       // console.log(resList);


    };



    return resList;

};

export default useRestaurantItemList;