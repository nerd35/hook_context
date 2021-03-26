import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FileBase from 'react-file-base64';

const AddForm = () => {
    const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      label="Report Name" 
      variant="outlined" 
      />
      <TextField 
      id="outlined-basic" 
      label="Schedule" 
      variant="outlined" 
      />
      <TextField 
      id="outlined-basic" 
      label="Receipient" 
      variant="outlined" 
      />
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Category Type"
        >
          <MenuItem value="">
            <em>Select an option</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Status Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Status Type"
        >
          <MenuItem value="">
            <em>Select an option</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div >
            <FileBase 
            type="file"
            multiple={false}
            // onDone={({base64}) => setPostData({
            //   ...postData, selectedFile: base64
            // })}
            /> 
          </div>
    </form>
  );
}

export default AddForm;



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 30px',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));