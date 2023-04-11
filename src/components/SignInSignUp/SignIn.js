import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory, withRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEUEcOi3E7Cn8Q3iz1BXz3uWHI6uiMzuY",
  authDomain: "volksmarkt-4d5c7.firebaseapp.com",
  projectId: "volksmarkt-4d5c7",
  storageBucket: "volksmarkt-4d5c7.appspot.com",
  messagingSenderId: "90681579068",
  appId: "1:90681579068:web:d801aa9a2ebdacdcdfd539",
  measurementId: "G-S8H1PTD7EB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        VolksMarkt
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignIn() {
  const auth = getAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    signInWithEmailAndPassword(auth, email, password).then(
      (user) => {
        console.log(user);
      }
    ).catch((err) => {
      console.log(err);
    })
  };
  const history = useHistory();
  const goToSignUp = () => {
    history.push('/SignUp')
  }
  const goToforgot_password = () => {
    history.push('/forgotPassword')
  }
  const returnHome = () => {
    history.push('/')
  }
  const goToUserDashboard = () => {
    history.push('/UserDashboard')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={goToUserDashboard}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item >
              <Link variant="body2" onClick={goToforgot_password} href=''>
                  {"Forgot Password?"}
                </Link>
              </Grid>
              <Grid item sx={{
                position:"relative",
                left:80,
              }}>
                <Link variant="body2" onClick={goToSignUp} href=''>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default withRouter(SignIn);