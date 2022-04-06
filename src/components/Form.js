import FormControl from "@material-ui/core/FormControl";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helperText: "",
      error: false,
      ageStep: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

      userData: {
        last_name: "",
        name: "",
        gender: "",
        age: 10,
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    
      this.setState({
        userData: {
          ...this.state.userData,
          [name]: value,
        },
      });
 
    

  };

  handleInputChangetest = (e) => {
    const { name, value } = e.target;

      this.setState({
        userData: {
          ...this.state.userData,
          [name]: value,
        },
      });

    

  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userData);
    alert(`
    Nom : ${this.state.userData.name}
    Prenom : ${this.state.userData.last_name}
    Age : ${this.state.userData.age}`);
  };

  render() {
    return (
      <div className="home_form">
        <div className="title">
          <h2 className="title">Renseignez vos informations</h2>
        </div>
        <div className="myForm">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Grid
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={6}>
                <TextField
                  id="last_name"
                  name="last_name"
                  label="Nom"
                  type="text"
                  onChange={(e) => this.handleInputChange(e)}
                  value={this.state.userData.last_name}
      
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="name-input"
                  name="name"
                  label="Prénom"
                  type="text"
                  onChange={(e) => this.handleInputChange(e)}
                  value={this.state.userData.name}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>

                <FormControl>
                  <Select
                    name="age"
                    value={this.state.userData.age}
                    onChange={(e) => this.handleInputChangetest(e)}
                  >
                    {this.state.ageStep.map((step, i) => (
                      <MenuItem key={i} value={step}>
                        {step}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Genre</FormLabel>
                  <RadioGroup
                    name="gender"
                    value={this.state.userData.gender}
                    onChange={(e) => this.handleInputChange(e)}
                    row
                  >
                    <FormControlLabel
                      key="male"
                      value="male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                    <FormControlLabel
                      key="female"
                      value="female"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                    <FormControlLabel
                      key="non-binaire"
                      value="non-binaire"
                      control={<Radio size="small" />}
                      label="non-binaire"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" type="submit">
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
