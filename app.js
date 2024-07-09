const $giphyForm = $('#giphy-form');
const $input = $('#input');
const $searchGiphy = $('#search-giphy');
const $removeGiphy = $('#remove-giphy');
const $giphy = $('#giphy');

const url = 'https://api.giphy.com/v1/gifs/search';
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

async function handleFormSubmit(event){
    
    event.preventDefault(); // prevents the form from auto-submitting on the webpage
    console.log('hello');
    const searchTerm = $input.val();
    const results = await axios.get(url, {params: {q: searchTerm, api_key: apiKey }} );
    console.log(results)
    const { data } = results.data;
    const numGiphs = data.length;
    const randomGiphIndex = Math.floor(Math.random() * numGiphs)
    const $giphyContainer = $('<div>', {class: 'giph-container'});
    const $image = $('<img>', {src: data[randomGiphIndex].images.original.url });
    $giphyContainer.append($image);
    $giphy.append($giphyContainer);
}

function handleRemove(){
    $giphy.empty();
}

$giphyForm.on('submit', handleFormSubmit);
$('#remove-giphy').on('click', handleRemove);