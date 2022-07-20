import axios from "axios";
import { useEffect, useState } from "react";
import { ITasks } from "../../interfaces/tasks";

export function useHome() {
  const [avaiableTasks, setAvaiableTasks] = useState([] as ITasks[]);

  const access_token = localStorage.getItem('access_token');

  useEffect(() => {
    (async function getAvaiableTasks() {
      try {
        const response = await axios.get('http://localhost:3333/tasks', {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })

        console.log(response.data);
        setAvaiableTasks(response.data);
      } catch(error) {
        console.log(error);
      }
    })()
  }, []);

  return {
    avaiableTasks
  }
  
}