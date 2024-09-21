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
import Link from "next/link";

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
      <ListItem>
        <ListItemButton href="/sign-up">Sign Up</ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between items-center">
        <Link href="/" passHref className="flex items-center space-x-2">
          <IconButton color="inherit" aria-label="logo">
            <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
          </IconButton>
          <Typography variant="h6" className="text-white">
            React2Week1
          </Typography>
        </Link>
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
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
