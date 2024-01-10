const toggleBodyScroll = (bodyScrollStyle) => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  document.body.style.paddingRight =
    bodyScrollStyle === "clip" ? `${scrollbarWidth}px` : "0";
  document.body.style.overflowY = bodyScrollStyle;
};

export default toggleBodyScroll;
