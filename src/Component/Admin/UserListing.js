import * as React from 'react';
import Table from '@mui/material/Table';
import { useDispatch, useSelector } from "react-redux";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { DeleteUser, EditUser } from '../../Redux/Action/Action';
import UsersModal from '../../Layout/Modal';

export default function UserListing() {
  const UsersData = useSelector((state => state?.users?.Register_user))
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DeleteUser(id));
  };
  const handleClickOpen = (id) => {
    EditUser(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S No.</TableCell>
              <TableCell align="center">FirstName</TableCell>
              <TableCell align="center">LastName</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center" colSpan={2}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UsersData.map((row, ind) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell calign="center">
                  {ind}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleDelete(ind)}
                  >Sonalichouhan@1998
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button color="primary" onClick={()=>handleClickOpen(ind)}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UsersModal open={open} handleClose={handleClose} />
    </div>
  );
}