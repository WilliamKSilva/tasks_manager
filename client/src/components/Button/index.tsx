import { Button } from '@chakra-ui/react';

type ButtonProps = {
  title: string;
  onClick: () => void;
  type: 'button' | 'reset' | 'submit';
}

export function ButtonDefault({ title, onClick, type }: ButtonProps) {
  return (
    <Button 
      onClick={() => onClick()} 
      bg="primary" 
      size="md" 
      color="white"
      borderRadius="md"
      w="full"
      type={type}
    >
      {title}
    </Button>
  )
}