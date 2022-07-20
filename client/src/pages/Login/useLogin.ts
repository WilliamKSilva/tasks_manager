import axios from "axios";
import { useNavigate } from "react-router-dom";

type handleRegisterData = {
  email: string;
  password: string;
}

export function useLogin() {
  const navigate = useNavigate();
  
  async function onLogin({ email, password }: handleRegisterData) {       

    try {
      const response = await axios.post('http://localhost:3333/authenticate', {
        email,
        password
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      
      localStorage.setItem('access_token', response.data);      
      navigate('/home');
    } catch(error) {
      console.log(error);
    }
  }

  return {
    onLogin
  }
}