import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/favicon.ico" alt="logo" width="30" height="30" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React2Week1
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
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
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
