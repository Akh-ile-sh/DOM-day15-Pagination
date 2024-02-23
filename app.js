var numbers = document.querySelectorAll(".numbers");
// console.log(numbers[9].innerText);

var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");

//this function will activate the buttons to change the numbers
function nextPage() {
  for (let i = 0; i < 5; i++) {
    if (numbers[4].innerText != 100) {
      previousBtn.classList.remove("disabled");
      nextBtn.classList.remove("disabled");

      numbers[i].innerText = parseInt(numbers[i].innerText) + 5;
    } else if (numbers[0].innerText == 96) {
      nextBtn.classList.add("disabled");
    }
  }
  // console.log(numbers[9].innerText);
}

//previous page till 0
function previousPage() {
  for (let i = 0; i < 5; i++) {
    if (numbers[4].innerText != 5) {
      nextBtn.classList.remove("disabled");
      numbers[i].innerText = parseInt(numbers[i].innerText) - 5;
    } else if (numbers[0].innerText == 1) {
      previousBtn.classList.add("disabled");
    }
  }
}

const cardTitle = document.getElementById("name");
const email = document.getElementById("email");
const url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

// Fetch the JSON data
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    jsonData = data;

    //while opening the website it will open the first data in default
    cardTitle.innerText = `Name: ${jsonData[0].name}`;
    email.innerText = `Email: ${jsonData[0].email}`;
    numbers[0].classList.add("active");
    // console.log(jsonData[0]);
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        let index = parseInt(number.innerText) - 1;
        // console.log(jsonData[index].name);

        //display the name and email
        cardTitle.innerText = `Name: ${jsonData[index].name}`;
        email.innerText = `Email: ${jsonData[index].email}`;

        numbers.forEach((n) => {
          n.classList.remove("active"); //makes the button inactive if there is no further page
        });
        number.classList.add("active");
      });
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//Live link: https://65d82df58e8d879f6249fbc2--resplendent-muffin-c744f2.netlify.app/
