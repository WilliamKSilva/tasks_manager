import axios from "axios";

type handleRegisterData = {
  email: string;
  password: string;
}

export function useRegister() {
  
  async function onRegister({ email, password }: handleRegisterData) {
    console.log(email, password);

    try {
      await axios.post('http://localhost:3333/users/create-user', {
        email,
        password
      })
    } catch(error) {
      console.log(error);
    }
  }

  return {
    onRegister
  }
}