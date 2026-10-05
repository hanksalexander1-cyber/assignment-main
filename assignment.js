function background() {
  let isBlue = true;

  setInterval(() => {
    document.documentElement.style.backgroundColor = isBlue ? "cyan" : "pink";
    isBlue = !isBlue;
  }, 2000);
}

background();