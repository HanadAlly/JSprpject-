(function calculateDayOfWeek() {
  // This will be used in the handleSubmit to calculate the Akan name
  function getDayOfWeek(day, month, year) {
    let birthDate = new Date(year, month - 1, day); // Month is 0-indexed
    return birthDate.getDay(); // Returns a number 0-6 for the day of the week
  }

  // This function will return the Akan name based on gender and the day of the week
  function getAkanName(gender, dayOfWeek) {
    let maleAkannames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    let femaleAkannames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    if (gender === "male") {
      return maleAkannames[dayOfWeek];
    } else if (gender === "female") {
      return femaleAkannames[dayOfWeek];
    }
    return ""; // Default empty if gender is not set
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form inputs
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;

    // Validate if inputs are empty
    if (!day || !month || !year || !gender) {
      alert("Please fill out all the fields.");
      return;
    }

    // Get the day of the week for the entered birthdate
    const dayOfWeek = getDayOfWeek(day, month, year);

    // Get the Akan name based on gender and day of the week
    const akanName = getAkanName(gender, dayOfWeek);

    // Display the Akan name in the result section
    document.getElementById(
      "output"
    ).textContent = `Your Akan name is: ${akanName}`;
  }

  // Add event listener for form submission
  document.getElementById("form").addEventListener("submit", handleSubmit);
})();