import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "../Store/Store";
import EditActionButton from "./UpdateButton";
import UpdateProject from "./UpdateProjecct";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

const SimplePaper = (props) => {
  const { projects, selectUpdateId } = store;
  const mystyle = {
    paddingLeft: "50px",
    paddingBottom: "20px",
  };

  return (
    <Grid style={mystyle} item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <div className="edit-btn">
            <button className="btn" onClick={() => selectUpdateId(props.id)}>
              <EditActionButton />
            </button>
          </div>
          <UpdateProject id={props.id} />

          <h2>{props.title}</h2>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {props.account}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default SimplePaper;
