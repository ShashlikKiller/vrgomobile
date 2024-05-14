import { ClearStackAndNavigate, NavigationContext, Screens } from "@navigations/navigate";
import { IDataProvider, Path } from "@scripts/interfaces/content-provider/IDataProvider";
import { useContext, useEffect } from "react";
import { View } from "react-native";

export default function Start({ navigation }: { navigation: any }) {
    const { data, setData } = useContext(NavigationContext);
  
    let dataProvider = data.dataProvider as IDataProvider;
    useEffect(()=>{
        



        ClearStackAndNavigate(navigation, Screens.choosePat);

    },[]);


    return(<View/>);
  }