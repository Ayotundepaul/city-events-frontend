import React from "react";
import clsx from "clsx";
import { TextField, NoSsr } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import { Colors } from "../constants";

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: 5,
    borderColor: "#2B2B2B",
  },
  textField: {
    //marginBottom: 20,
    //width: 360,
    height: 48,
    marginBottom:20,
  },
}));

const MyTextField = (props) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      fullWidth
      inputProps={{
        id: props.id,
        name: props.name,
        required: props.required,
        placeholder: props.placeholder,
        type: props.type,
        value: props.value,
        defaultValue:props.defaultValue
      }}
      label={props.label}
      multiline={props.multiline}
      rows={props.rows}
      margin={props.margin}
      InputProps={{
        classes: { notchedOutline: classes.rounded },
      }}
      onChange={props.onChange}
      className={clsx(classes.textField, props.className)}
    />
  );
};

export default MyTextField;



// I plan using this veru soon

// const StyledTextField = styled(TextField)`
//   label.Mui-focused {
//     color: green;
//   }
//   .MuiOutlinedInput-root {
//     fieldset {
//       border-color: red;
//     }
//     &:hover fieldset {
//       border-color: yellow;
//     }
//     &.Mui-focused fieldset {
//       border-color: green;
//     }
//   }
// `;

// export default function GlobalClassName() {
//   return (
//     <NoSsr>
//       <StyledTextField label="Deterministic" variant="outlined" id="deterministic-outlined-input" />
//     </NoSsr>
//   );
// }

