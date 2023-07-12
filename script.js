const text = document.querySelector(".text");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
  targets: ".text span",
  easeing: "easeInOutExpo",
  loop: false,
});

animation
  .add({
    rotate: function () {
      return anime.random(-360, 360);
    },
    translateX: function () {
      return anime.random(-300, 300);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    duration: 5000,
    delay: anime.stagger(20),
  })
  .add({
    rotate: 0,
    translateX:0,
    translateY:0,
    duration: 5000,
    delay: anime.stagger(20),
  });
