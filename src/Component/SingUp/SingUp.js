import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { SingUpCreate } from '../../Redux/Action/Action';


const defaultTheme = createTheme();
export default function SignUp() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
    dispatch(SingUpCreate(data))

    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(handleRegistration)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  autoFocus
                  fullWidth
                  label="Name"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
              </Grid>
              <p className="error"> {errors.name && <p>This is required.</p>}</p>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  autoFocus
                  placeholder="Enter Last  Name"
                  {...register("lastName", { required: true })}
                />
              </Grid>
              <p className="error"> {errors.lastName && <p>This is required.</p>}</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    },
                  })}
                />
              </Grid>
              <p className="error">
                {errors.email?.type === "required" && "Email Address is required"}
              </p>
              <p className="error">
                {errors.email?.type === "pattern" && "must add Valid email"}
              </p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
              </Grid>
              <p className="error">
                {errors.password?.type === "required" && "Password  required"}
              </p>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  {...register("number", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}

                />
              </Grid>
              <p className="error">
                {" "}
                {errors.number?.type === "required" && "Number required"}{" "}
              </p>
              <p className="error">
                {" "}
                {errors.number?.type === "minLength" && "Valid Number"}
              </p>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}