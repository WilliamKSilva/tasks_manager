import { useRef } from "react";
import { Button, Flex, Input, Popover, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure } from "@chakra-ui/react";
import { ButtonDefault } from "../Button";
import { PopoverForm } from "../Form";

export function PopoverTask() {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

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
          <ButtonDefault title="New Task" onClick={() => console.log('teste')} />
        </PopoverTrigger>
        <PopoverContent p={5} bg="background" borderColor="elevation">
          <PopoverHeader fontSize="md" color="white" borderColor="elevation">
            Create a new Task!
          </PopoverHeader> 
          <PopoverForm>
            <Input placeholder="Name" borderColor="elevation" />
            <Input placeholder="Description" borderColor="elevation" />
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