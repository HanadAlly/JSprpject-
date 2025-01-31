function calculateDayOfWeek() {
  function getDayOfWeek(day, month, year) {
    let birthDate = new Date(year, month - 1, day);
    return birthDate.getDay();
  }

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
    return ""; 
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;

    if (!day || !month || !year || !gender) {
      alert("Please fill out all the fields.");
      return;
    }

    const dayOfWeek = getDayOfWeek(day, month, year);

    const akanName = getAkanName(gender, dayOfWeek);

    document.getElementById(
      "output"
    ).textContent = `Your Akan name is: ${akanName}`;
  }

  document.getElementById("form").addEventListener("submit", handleSubmit);
};
