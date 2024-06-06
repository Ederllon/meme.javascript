

document.addEventListener('DOMContentLoaded', function() {
    const gerarMemeBtn = document.getElementById('gerarMemeBtn');
    const memeImg = document.getElementById('memeImg');

    gerarMemeBtn.addEventListener('click', function() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                const memes = data.data.memes;
                const meme = memes[Math.floor(Math.random() * memes.length)];
                memeImg.src = meme.url;
            })
            .catch(error => console.error('Erro ao obter memes:', error));
    });
});
