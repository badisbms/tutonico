        <TextField
          id="select"
          label="Age"
          select
          onChange={(e) => this.handleInputChange(e)}
          value={this.state.user.age}
        >
          {this.state.ageStep.map((step, index) => (
   
            <MenuItem key={index} value={step} >
              {step}
            </MenuItem>
          ))}
        </TextField>