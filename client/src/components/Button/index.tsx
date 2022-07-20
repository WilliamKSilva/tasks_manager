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
      color="white"
      borderRadius="md"
      w={{base: '27%', sm: '20%', md: '15%', lg: '10%', xl: '7%'}}
      type={type}
    >
      {title}
    </Button>
  )
}