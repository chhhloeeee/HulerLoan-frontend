import React, {useEffect, useState} from 'react';
import styles from '../styles/form.module.css';

export const APILoader = ({url, Component, reloadWith}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  
  const fetchData = () => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setResponse(json)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true)); 
      
      console.log(response)
  }
  useEffect(fetchData, reloadWith || [])


  if (!isLoaded) {
    return (
        <h1 className={styles.loaded}>Loading...</h1>
    )
  } 
  if (error) {
    return (
        <div id ="noDataLBL" className={styles.app}>Could not load </div>
    )
  }
  return (
      <Component data={response}/>
  )
}