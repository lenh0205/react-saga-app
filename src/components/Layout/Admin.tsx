import React from 'react';
import Box from '@mui/material/Box';
import { Header, Sidebar } from 'components/Common';
export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header/>
      </Box>
      <Box
        sx={{
          gridArea: 'sidebar',
          borderRight: theme => `1px solid ${theme.palette.divider}`
        }}
      >
        <Sidebar/>
      </Box>
      <Box
        sx={{
          gridArea: 'main',
          paddingY: 2,
          paddingX: 3
        }}
      >
        Main
      </Box>
    </Box>
  );
};
