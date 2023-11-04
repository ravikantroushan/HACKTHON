// Navbar.jsx
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Movie DB
        </Typography>
        <Link to="/new" style={{ color: "white", marginRight: "20px" }}>
          New Releases
        </Link>
        <Link to="/hot" style={{ color: "white" }}>
          {"What's Hot"}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
