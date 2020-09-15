import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [fecha, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
     ordenar por
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="fecha">Titulo</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="fecha"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fecha}
          onChange={handleChange}
        >
          <MenuItem value={fecha}>Fecha</MenuItem>
          <MenuItem value={10}>Titulo</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}