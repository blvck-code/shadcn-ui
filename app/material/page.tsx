"use client";
import * as React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { DeleteIcon } from "lucide-react";
import countries from "../../utils/countries";
import top100Films from "../../utils/movies";

const options: string[] = ["Option 1", "Option 2"];

export default function Home() {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  // Define button size based on screen size
  const buttonSize = isLargeScreen ? "large" : "small";

  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <main
      className="
    flex flex-col gap-y-4 border mx-auto py-10 px-5"
    >
      <Button className={"bg-red-400"} variant={"contained"} size={buttonSize}>
        {isLargeScreen ? "Large Screen Button" : "Small Screen Button"}
      </Button>
      <Button variant="contained" className={"bg-red-400"}>
        <IconButton aria-label={"delete"}>
          <DeleteIcon />
          Primary
        </IconButton>
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Primary
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={"Movie"} />}
      />
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={"Choose a country"}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
        options={countries}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
      />
      <div>
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Controllable" />
          )}
          options={options}
        />
      </div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Label"
          size="small"
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Required"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </main>
  );
}
