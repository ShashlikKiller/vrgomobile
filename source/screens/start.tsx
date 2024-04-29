import { ClearStackAndNavigate, NavigationContext } from "@navigations/navigate";
import { IDataProvider, Path } from "@scripts/interfaces/content-provider/IDataProvider";
import { useContext, useEffect } from "react";
import { View } from "react-native";

export default function Start({ navigation }: { navigation: any }) {
    const { data, setData } = useContext(NavigationContext);
  
    let dataProvider = data.dataProvider as IDataProvider;
    useEffect(()=>{
    
        dataProvider.GetSerializable(Path.pathology)
        .then(result => {
            if(result != null){
                ClearStackAndNavigate(navigation, 'mainScreen');
                return;
            }
            ClearStackAndNavigate(navigation, 'choosePat');
        })
        .catch(error=>{
            console.assert(error);
        });
    },[]);


    return(<View/>);
  }