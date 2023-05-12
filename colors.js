const color = ["Blue", "Green", "Red", 
                "Orange", "Violet", "Indigo", 
                "Yellow", "Black", "White", 
                "Gray", "Brown", "Pink", "Purple", 
                "Cyan", "Magenta", "Lime", 
                "Olive", "Maroon", "Navy", 
                "Aquamarine", "Turquoise", "Tuts"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let suffix;
  if (i + 1 >= 11 && i + 1 <= 13) {
    suffix = "th";
  } else {
    suffix = o[(i + 1) % 10] || o[0];
  }
  console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
}
