import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/favicon.ico" alt="logo" width="30" height="30" />
        </IconButton>
        <Typography variant="h6" component="div">
          React2Week1
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
