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
          console.log(json.status);
        if (json.status !== "ok") {
          throw Error("Internal Server Error")
        }
        setResponse(json)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true)); 
      
  }
  useEffect(fetchData, reloadWith || [])

  if (!isLoaded) {
    return (
        <h1 className={styles.title}>Loading...</h1>
    )
  } 
  if (error) {
    return (
        <div id ="noDataLBL" className={styles.app}>Could not load </div>
    )
  }
  return (
      <Component data={response.data}/>
  )
}