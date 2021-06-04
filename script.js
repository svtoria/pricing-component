document.addEventListener("DOMContentLoaded", () => {
  let toggleSwitch = document.querySelector('input[type="checkbox"]');
  let thing = false;

  let month = {
    basic: "$19.99",
    professional: "$24.99",
    master: "$39.99",
  };

  let year = {
    basic: "$119.99",
    professional: "$249.99",
    master: "$399.99",
  };

  toggleSwitch.addEventListener("change", (e) => {
    thing = !thing;

    if (thing) {
      document.getElementById("basic").innerText = month.basic;
      document.getElementById("professional").innerText = month.professional;
      document.getElementById("master").innerText = month.master;
    } else {
      document.getElementById("basic").innerText = year.basic;
      document.getElementById("professional").innerText = year.professional;
      document.getElementById("master").innerText = year.master;
    }
  });
});
