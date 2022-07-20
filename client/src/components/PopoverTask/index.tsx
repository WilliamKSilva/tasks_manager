import { useRef } from "react";
import { Button, Flex, Input, Popover, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure } from "@chakra-ui/react";
import { ButtonDefault } from "../Button";
import { PopoverForm } from "../Form";
import axios from "axios";
import { useForm } from "react-hook-form";

type handleCreateTaskData = {
  title: string;
  description: string;  
}

export function PopoverTask() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { handleSubmit, register } = useForm();
  const firstFieldRef = useRef(null);

  const access_token = localStorage.getItem('access_token');   

  async function handleCreateTask({ title, description }: handleCreateTaskData) {
    console.log(title, description);

    try {
      const response = await axios.post('http://localhost:3333/tasks', {
        title,
        description
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>      
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <ButtonDefault title="New Task" onClick={() => console.log('teste')} type="submit" />
        </PopoverTrigger>
        <PopoverContent p={5} bg="background" borderColor="elevation" as="form" onSubmit={handleSubmit(handleCreateTask)}>
          <PopoverHeader fontSize="md" color="white" borderColor="elevation">
            Create a new Task!
          </PopoverHeader> 
          <PopoverForm>
            <Input color="white" placeholder="Name" borderColor="elevation" {...register('title')} />
            <Input color="white" placeholder="Description" borderColor="elevation" {...register('description')} />
          </PopoverForm>
          <PopoverFooter borderColor="elevation">
            <Flex justify="space-around">
              <Button 
                p={2} 
                bg="primary" 
                onClick={onClose} 
                color="white"
                fontSize="sm"
                >
                Cancel
              </Button>
              <Button 
                p={2} 
                bg="primary" 
                onClick={onClose} 
                color="white"
                fontSize="sm"
                type="submit"
              >
                Create
              </Button>
            </Flex>
          </PopoverFooter>          
        </PopoverContent>        
      </Popover>
    </>
  )
}