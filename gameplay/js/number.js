function sorted(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  const sortArr = document.getElementById("sortNumber");

  sortArr.innerHTML += "The Sort Array: " + arr;

  /* return arr; */
}

function randomNumber(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function random(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(randomNumber(0, 200));
  }
  console.log(arr);
  let div_number = document.getElementById("numberDiv");
  btn1.addEventListener("click", () => {
    div_number.innerHTML += "The Random Array: " + arr;
  });

  btn2.addEventListener("click", () => {
    sorted(arr);
  });
}

random(10);
