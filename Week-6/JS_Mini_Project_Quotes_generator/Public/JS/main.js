
const quotesContainer = document.querySelector("#quotes-container");
async function onSubmit(e) {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;

    if(prompt===''){
        alert('Please add some text.');
        return;
    }
    const quotes = await generateQuotesRequest(prompt);
    console.log(quotes)
    displayQuotes(quotes);
}

async function generateQuotesRequest(prompt){
    try {
        showSpinner();

        const response =  await fetch('openai/generateQuotes', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                prompt,
            })
        });
        if(!response.ok) {
            removeSpinner();
            throw new Error('That quotes could not be generated.');
        }
        const data = await response.json();
        console.log(data.data.choices[0].text)
        const quotes = data.data.choices.map((choice) => choice.text.trim());
        console.log(quotes);
        removeSpinner();
        return quotes;

    } catch (error) {
        document.querySelector('.msg').textContent = error        
    }
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#quote-form').addEventListener('submit',onSubmit);

function displayQuotes(quotes) {
    quotesContainer.innerHTML = "";
    quotes.forEach((quote) => {
      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote");
      quoteElement.innerText = quote;
      quotesContainer.appendChild(quoteElement);
    });
  }
