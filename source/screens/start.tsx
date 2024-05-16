import { ClearStackAndNavigate, NavigationContext, Screens } from "@navigations/navigate";
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
                ClearStackAndNavigate(navigation, Screens.MainScreen);
                return;
            }
            ClearStackAndNavigate(navigation, Screens.ChoosePat);
        })
        .catch(error=>{
            console.assert(error);
        });

    },[]);


    return(<View/>);
  }