setTimeout(() => console.log("First"), 1000)
setTimeout(() => console.log("Second"), 1000)
setTimeout(() => console.log("Third"), 1000)

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(`#${i}`), 1000)
}

