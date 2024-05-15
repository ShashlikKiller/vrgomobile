import AsyncStorage from '@react-native-async-storage/async-storage';
import { Patient } from './Patient';
import { useEffect } from 'react';
import { useState } from 'react';

interface IUserData{
  pathology: string,
  bodyPart: string[]
}

const [pati, setPati] = useState<IUserData| null>(null)

export async function getAllData(){
  try{
    const patient = await AsyncStorage.getItem('patient')
    if(patient){
      const patientContent = JSON.parse(patient) as IUserData
      return setPati(patientContent)
    }
  }catch(er){
    console.log(er)
  }
}

export async function createData() {
  const value = {
    pathology: '',
    bodyPart: []
  }
  try{
    await AsyncStorage.setItem('patient', JSON.stringify(value))
  }catch(er){
    console.log(er)
  }
}

export async function mergePathology(param: string) {
  const value = {
    pathology: param
  }
  try{
    await AsyncStorage.mergeItem('patient', JSON.stringify(value))
  }catch(er){
    console.log(er)
  }
}

export async function mergeBodyPart(param: string[]) {
  const value = {
    bodyPart: param
  }
  try{
    await AsyncStorage.mergeItem('patient', JSON.stringify(value))
  }catch(er){
    console.log(er)
  }
}

export async function removeFew () {
  try{
    await AsyncStorage.removeItem('patient')
  }catch(er){
    console.log(er)
  }
}
/////////////////////////////////////////////

const [show, setShow] = useState<IShowOrNot|null>(null)

interface IShowOrNot{
  showOrNot: boolean
}

export async function createShowOrNot() {
  const value = {
    showOrNot: false
  }
  try{
    await AsyncStorage.setItem('showOrNot', JSON.stringify(value))
  }catch(er){
    console.log(er)
  }
}

export async function mergeShowOrNot(param: boolean) {
  const value = {
    showOrNot: param
  }
  try{
    await AsyncStorage.mergeItem('showOrNot', JSON.stringify(value))
  }catch(er){
    console.log(er)
  }
}


export async function getShowOrNot(){
  try{
    const patient = await AsyncStorage.getItem('showOrNot')
    if(patient){
      const patientContent = JSON.parse(patient) as IShowOrNot
      return setShow(patientContent)
    }
  }catch(er){
    console.log(er)
  }
}

////////////////

export async function clearAll () {  
  try{
    await AsyncStorage.clear()
  }catch(er){
    console.log(er)
  }
}
///// удалить
useEffect(() => {
  async function getShowOrNot(){
    try{
      const patient = await AsyncStorage.getItem('showOrNot')

      if(patient){
        const patientContent = JSON.parse(patient) as IShowOrNot
        return setShow(patientContent)
      }
    }catch(er){
      console.log(er)
    }
  }
  getShowOrNot()
}, [])

//{show ? (
  //<Text>{show.showOrNot}</Text>
//):(
  //<Text>no Data</Text>
//)}