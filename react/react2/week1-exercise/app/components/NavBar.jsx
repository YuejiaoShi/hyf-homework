"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  ListItem,
  List,
  Drawer,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      <ListItem>
        <ListItemButton href="/astronomy-picture">
          Astronomy Picture
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton href="/rover-photos">Rover Photos</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton href="/blogs">Blogs</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton href="/epic">EPIC image</ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/favicon.ico" alt="logo" width="30" height="30" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React2Week1
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="/astronomy-picture">
              Astronomy Picture
            </Button>
            <Button color="inherit" href="/rover-photos">
              Rover Photos
            </Button>
            <Button color="inherit" href="/blogs">
              Blogs
            </Button>
            <Button color="inherit" href="/epic">
              EPIC image
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
