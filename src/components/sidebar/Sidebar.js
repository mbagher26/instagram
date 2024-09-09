import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ReelsIcons from '../../Icons/ReelsIcon';
import Badge from '@mui/material/Badge';
import Messages from '../../Icons/Messages';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Avatar from '@mui/material/Avatar';
import './Sidebar.css';
import Instagram from '../../Icons/Instagram';


function Sidbar() {
  return (<Box sx={{ display: 'flex' }}>


    <Drawer variant="permanent" open={true} >
      
      <Instagram/>
      
      <List>
        {['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications', 'Create', 'Profile'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ width: '250px', gap: '20px' }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,

                },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                ]}
              >
                {text === 'Home' && <HomeOutlinedIcon />}
                {text === 'Search' && <SearchIcon />}
                {text === 'Explore' && <ExploreOutlinedIcon />}
                {text === 'Reels' && <ReelsIcons />}
                {text === 'Messages' && <Badge color="error" badgeContent={4}><Messages /></Badge>}
                {text === 'Notifications' && <FavoriteBorderOutlinedIcon />}
                {text === 'Create' && <AddBoxOutlinedIcon />}
                {text === 'Profile' && <Avatar sx={{ width: 30, height: 30 }} alt="mohammad_bagher" src="/Images/mohammad_bagher.jpg"/>}




              </ListItemIcon>
              <ListItemText
                primary={text}

              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
  </Box>);
}

export default Sidbar;