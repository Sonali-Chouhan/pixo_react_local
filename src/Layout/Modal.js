import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../Redux/Action/Action';

export default function UsersModal({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const object = useSelector((state) => state)
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleUpdate = (data) => {
    dispatch(UpdateUser(data))
    reset()
  };
  React.useEffect(() => {
    const data = object;
    if (data) {
      setValue("name", data?.name);
      // setValue("email", data?.email);
      // setValue("User_Role", data?.User_Role);
      // setValue("number", data?.number);
      // setValue("id", id);
    }
  }, [])


  return (
    <div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{"Updated Users"}</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate onSubmit={handleSubmit(handleUpdate)} sx={{ mt: 3 }}>
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
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: 55 }}
            >
              Update
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}