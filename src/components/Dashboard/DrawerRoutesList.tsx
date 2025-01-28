import * as React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { routes } from './routes';

const DrawerRoutesList: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {routes.primary.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} to={route.route} key={route.route}>
              <ListItemIcon>
                <route.icon color='primary' />
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {routes.secondary.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} to={route.route} key={route.route}>
              <ListItemIcon>
                <route.icon color='primary' />
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DrawerRoutesList;
