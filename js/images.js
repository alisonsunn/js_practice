let count = 0;

// get the buttons
const previousButton = document.querySelector(".previousButton");
const nextButton = document.querySelector(".nextButton");

// get the pics
let pic = document.querySelector(".kuromiPics");
const pics = [
  "./image/kuromi1.webp",
  "./image/kuromi2.webp",
  "./image/kuromi3.jpeg"];

//change the pics
previousButton.addEventListener("click", previousPic);
nextButton.addEventListener("click", nextPic);

// change the notice
const notice = document.querySelector(".notice");

function previousPic() {
  count--;
  if (count < 0) {
    count = pics.length - 1;
  }
  pic.src = pics[count];
  notice.innerText = `Picture ${count + 1}.`;
}

function nextPic() {
  count++;
  console.log(count);
  if (count >= pics.length) {
    count = 0;
  }
  console.log(count);
  pic.src = pics[count];
  notice.innerText = `Picture ${count + 1}.`;
};
