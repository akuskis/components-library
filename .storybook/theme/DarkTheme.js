import { createMuiTheme } from '@material-ui/core';

const DarkTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(#204385 38px, #3a75bb 2px)',
        borderRadius: 0,
        border: 0,
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    MuiInput: {
      root: {
        background: '#353537',
        borderRadius: 0,
        border: '1px solid #adadaf',
        color: '#adadaf',
        fontSize: '16px',
        padding: '0px 10px'
      }
    }
  },
  props: {
    MuiInput: {
      disableUnderline: true
    }
  }
});

export default DarkTheme;
