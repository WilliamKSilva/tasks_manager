import { Button } from '@chakra-ui/react';

type ButtonProps = {
  title: string;
  onClick: () => void;
}

export function ButtonDefault({ title, onClick }: ButtonProps) {
  return (
    <Button 
      onClick={() => onClick()} 
      bg="primary" 
      size="sm" 
      color="white"
      borderRadius="md"
    >
      {title}
    </Button>
  )
}