import axios from "axios";
import { useNavigate } from "react-router-dom";

type handleRegisterData = {
  email: string;
  password: string;
  name: string;
}

export function useRegister() {
  
  const navigate = useNavigate();
  
  async function onRegister({ email, password, name }: handleRegisterData) {    
    

    try {
      await axios.post('http://localhost:3333/users', {
        email,
        password,
        name
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      navigate('/');
    } catch(error) {
      console.log(error);
    }
  }

  return {
    onRegister
  }
}