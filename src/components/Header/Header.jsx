import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// Styles
import useStyles from "./styles";

// Header
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* Brand Name */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/* Search */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
