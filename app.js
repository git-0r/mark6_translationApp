const textarea = document.querySelector('.translate-input');
const btn = document.querySelector('.btn');
const output = document.querySelector('.translate-output')

btn.addEventListener('click', () => {
    const inputText = textarea.value;
    translateText(inputText);
})


async function translateText(englishText) {
    await fetch('https://api.funtranslations.com/translate/minion.json?text=' + `${englishText}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                output.innerText = data.contents.translated;
                console.log(data)
            } else alert('something went wrong. please try again later.')
        })
}

