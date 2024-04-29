import { DataProvider } from "@scripts/utils/DataProvider";
import { useEffect } from "react";

export default function Start({ navigation }: { navigation: any }) {
    useEffect(()=>{
        let dataProvider = DataProvider.GetInstance();
        dataProvider.GetSerializable('patology')
        .then(result => {
            if(result != null){
                navigation.navigate('mainScreen');
                return;
            }
            navigation.navigate('choosePat');
        })
        .catch(error=>{
            console.assert(error);
        });
    },[]);


    return("");
  }