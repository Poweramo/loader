const loadBar = () => {
  setTimeout(() => {
    first.style = "visibility: visible";
  }, 1000);

  setTimeout(() => {
    second.style = "visibility: visible";
  }, 2000);

  setTimeout(() => {
    third.style = "visibility: visible";
  }, 3000);

  setTimeout(() => {
    fourth.style = "visibility: visible";
  }, 4000);

  setTimeout(() => {
    fifth.style = "visibility: visible";
  }, 5000);
};

loadBar();
