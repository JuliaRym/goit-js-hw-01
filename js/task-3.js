function getElementWidth(content, padding, border) {
  const a = content.replace("px", "");
  const b = padding.replace("px", "");
  const c = border.replace("px", "");

  console.log(a, b, c);

  return Number(a) + 2 * Number(b) + 2 * Number(c);
}

// getElementWidth("50px", "8px", "4px");
// getElementWidth("60px", "12px", "8.5px");
// getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
