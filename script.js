function convertText(type) {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    switch (type) {
        case 'sentence':
            outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
            break;
        case 'lower':
            outputText = inputText.toLowerCase();
            break;
        case 'upper':
            outputText = inputText.toUpperCase();
            break;
        case 'alternating':
            for (let i = 0; i < inputText.length; i++) {
                if (i % 2 === 0) {
                    outputText += inputText.charAt(i).toLowerCase();
                } else {
                    outputText += inputText.charAt(i).toUpperCase();
                }
            }
            break;
        case 'title':
            const words = inputText.split(' ');
            for (let i = 0; i < words.length; i++) {
                outputText += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
            }
            outputText = outputText.trim();
            break;
    }

    document.getElementById('outputText').value = outputText;
}