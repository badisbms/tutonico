export class userService {
  getUsers() {
    return (
      fetch("assets/data/defaultValues.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        // Handle success
        .then((response) => {
          console.log(response);
          return response.json();
        }) // convert to json
        .then((data) => {
          return data;
        })
        .catch((err) => console.log("Request Failed", err))
    ); // Catch errors
  }
}
