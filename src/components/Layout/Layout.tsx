import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box minH="100vh" bg="var(--background-color)">
        <Box p={{ base: 0, md: 4 }}>{children}</Box>
      </Box>
    </>
  );
};
