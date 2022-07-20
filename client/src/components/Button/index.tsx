import { Button } from '@chakra-ui/react';

type ButtonProps = {
  title: string;
  onClick: () => void;
  type: 'button' | 'reset' | 'submit';
}

const ButtonDefault = ({ title, onClick, type }: ButtonProps) => {
  return (
    <Button 
      onClick={() => onClick()} 
      bg="primary"       
      color="white"
      borderRadius="md"
      w="100%"      
      type={type}
    >
      {title}
    </Button>
  )
}

export { ButtonDefault };