import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Poll from '@mui/icons-material/Poll';
import HelpCenter from '@mui/icons-material/HelpCenter';
import { ListItemIcon } from '@mui/material';

const DRAWER_WIDTH = 240;

const routes = [
  { name: 'Exchange Rates', route: '/', icon: Poll },
  { name: 'About', route: '/about', icon: HelpCenter },
];

const Dashboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Header panel */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Cryptocurrency Rates
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routes.map((route) => (
              <ListItemButton component={Link} to={route.route} key={route.route}>
                <ListItemIcon>{<route.icon color='primary' />}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />

        {/* Main dashboard content */}
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
