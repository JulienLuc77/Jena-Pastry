const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth : true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

//Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#2D3F50";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#2D3F50";
  }
});