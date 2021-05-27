import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../../authProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Landing = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, loading, logout } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="header-info">
      <h1 className="app-title">Frontend Example</h1>
      {!user ? (
        <List component="nav" aria-label="login container">
          <ListItem button onClick={() => history.push("/signin")}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      ) : (
        <>
          <Typography style={{ padding: "10px" }}>
            {user.displayName}
          </Typography>
          <Typography style={{ padding: "10px" }}>{user.email}</Typography>
          <Divider />
          <div className={classes.root}>
            <List component="nav" aria-label="logout container">
              <ListItem button onClick={() => logout()}>
                <ListItemIcon>
                  <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        </>
      )}
    </div>
  );
};

export default Landing;
