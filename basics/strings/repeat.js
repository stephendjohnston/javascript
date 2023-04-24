function repeat(n, string) {
  let repetitions = '';

  for (let i = 0; i < n; i++) {
    repetitions += string;
  }

  return repetitions;
}

repeat(3, 'ha'); // 'hahaha'