const buttonEle = document.getElementById("btn");
const modal = document.getElementById("modalDiv");
const card1 = document.getElementById("c1");
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");
const imgContainer = document.getElementById("imgContainer");

//display  conatct us form while clicking on contact us btn
buttonEle.addEventListener("click", () => {
  modal.style.display = "flex";
});

card1.addEventListener("click", () => {
  imgContainer.innerHTML = `<img src="./Assets/image.png" alt="img" />`;
});

card2.addEventListener("click", () => {
  imgContainer.innerHTML = `<img src="./Assets/marketing-1.jpg" alt="img"/>`;
});

card3.addEventListener("click", () => {
  imgContainer.innerHTML = `<img src="./Assets/marketing-2.jpg" alt="img" />`;
});
