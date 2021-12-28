
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    '&:hover': {
      
      backgroundColor: '#483D8B',
      boxShadow: '0 0 5px #000000, 0 0 25px #A52A2A, 0 0 50px #6495ED, 0 0 200px #6495ED',   
      
    },
  },
}));
