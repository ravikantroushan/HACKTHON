import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: "20px",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="body2">upGrad Frontend Hackathon</Typography>
    </div>
  );
};

export default Footer;
