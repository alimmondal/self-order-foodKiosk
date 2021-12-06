import "./App.css";
import { Container, CssBaseline, Paper, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import HomeScreen from "./screens/HomeScreen";
const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "fontSize:1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: {main:'#ff1744'},
    secondary: {
      main:'#118e16',
      contrastText: '#ffffff',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Container maxWidth="sm">
        <Paper>
          <HomeScreen></HomeScreen>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
