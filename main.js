let btn = document.getElementById('btn');
let output = document.getElementById('output');


// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

btn.addEventListener('click', generateQuote)

generateQuote()

// USING ASYNC/AWAIT
async function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://api.quotable.io/random', config)

  const data = await res.json()

  output.innerHTML = data.content
}

