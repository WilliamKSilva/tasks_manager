import axios from "axios";


type handleCreateTaskData = {
  title: string;
  description: string;
}

export function useHome() {

  async function handleCreateTask({ title, description }: handleCreateTaskData) {
    try {
      await axios.post('http://localhost:3333/tasks/create-task', {
        title,
        description
      }, 
      {
        headers: {
          Authorization: `Bearer `
        }
      }
      )
    } catch(error) {
      console.log(error);
    }
  }
}