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
      size={{base: 'md', lg: 'lg'}} 
      color="white"
      borderRadius="md"
      w="27%"
      type={type}
    >
      {title}
    </Button>
  )
}