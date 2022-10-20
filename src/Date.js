import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Date({setFrom,setUntil,from,until}) {
  
  const handleChange1 = (newValue) => {
    setFrom(newValue);
  };
  const handleChange2 = (newValue) => {
    setUntil(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<Stack direction="row" spacing={30} margin={5}>
        <DateTimePicker
          label={"from"}
          value={from}
          onChange={handleChange1}
          renderInput={(params) => <TextField {...params} />}
        />
        {/* {until.valueOf()} */}
         <DateTimePicker
          label="until"
          value={until}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
