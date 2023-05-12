const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 },
  ];
  
  
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].marks;
  }
  const average = sum / students.length;
  console.log(`The Average marks are: ${average}`);
  
  
  let grade;
  if (average < 60) {
    grade = 'F';
  } else if (average < 70) {
    grade = 'D';
  } else if (average < 80) {
    grade = 'C';
  } else if (average < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }

  console.log(`Grade is equal to: ${grade}`);
  