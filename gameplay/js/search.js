const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
(searchInp = wrapper.querySelector("input")),
  (options = wrapper.querySelector(".options"));

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Austraila",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Franch",
  "Germany",
  "Georgia",
  "Hungary",
  "Iran",
  "Italy",
  "Jpan",
  "Kenya",
  "Latvia",
  "Malaysia",
  "Maldives",
  "Maxcio",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Peru",
  "Qatar",
  "Russia",
  "Romania",
  "sout Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnan",
  "Western Sahara",
  "Yemen",
  "Zimbabwe",
];
function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach((country) => {
    let isSelected = country == selectedCountry ? "Selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry();
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchedVal = searchInp.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchedVal);
    })
    .map((data) => `<li  onclick="updateName(this)">${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : `<p>ops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
