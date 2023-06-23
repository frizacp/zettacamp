const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // mengurutkan array
  const sorteddata = input.sort((a, b) => a - b);

  // proses mengukur median
  let median;
  const x = sorteddata.length / 2;
  const y = x - 1; //dirumus seharusnya +1, namun karena array dimulai dari 0, sehingga  menggunakan -1
  median = (sorteddata[x] + sorteddata[y]) / 2;

  return median;
}

console.log(result(input));
