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
import { usePathname } from "next/navigation";

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const pathname = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const getButtonClasses = (path) => {
    return pathname === path ? "font-bold text-base" : "";
  };

  const navItems = [
    { label: "Astronomy Picture", path: "/astronomy-picture" },
    { label: "Rover Photos", path: "/rover-photos" },
    { label: "Blogs", path: "/blogs" },
    { label: "EPIC image", path: "/epic" },
    { label: "Sign Up", path: "/sign-up" },
  ];

  const renderDrawerItems = () => (
    <List>
      {navItems.map(({ label, path }) => (
        <ListItem key={path}>
          <ListItemButton
            component={Link}
            href={path}
            className={getButtonClasses(path)}
          >
            {label}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const renderDesktopItems = () => (
    <Stack direction="row" spacing={2}>
      {navItems.map(({ label, path }) => (
        <Button
          key={path}
          color="inherit"
          href={path}
          className={getButtonClasses(path)}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );

  return (
    <AppBar position="static" className="bg-indigo-900">
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
              {renderDrawerItems()}
            </Drawer>
          </>
        ) : (
          renderDesktopItems()
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
