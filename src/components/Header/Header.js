import React from "react";
import "./Header.css";
import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import countries from "../../data/category";

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: LightMode ? "#000": "#fff",
      },
      type: LightMode ? "light":"dark"
    },
  });

  const handleChange = (language)=> {
    setCategory(language)
    setWord('')
  }

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a word..."
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
          >
            {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
