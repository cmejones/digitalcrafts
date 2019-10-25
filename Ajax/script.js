var button = document.getElementById('dogButton');
var image = document.createElement('img');
var select = document.getElementById('selectBreed');

button.addEventListener('click', function (e) {
    e.preventDefault();
    button.innerText = "Fetching dogs..."
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            image.src = response.data.message;
            document.body.append(image);
            button.innerText = "Generate Doggo";
            //console.log(response);
        })
})

axios.get('https://dog.ceo/api/breeds/list')
    .then(function (response) {
        response.data.message.forEach(function (breed) {
            var option = document.createElement('option');
            select.append(option);
            option.value = breed;
            option.innerText = breed;
        });
    })

select.addEventListener('change', function() {
    axios.get('https://dog.ceo/api/breed/' + this.value + '/images/random')
        .then(function (response) {
            image.src = response.data.message;
            document.body.append(image);
            button.innerText = "Generate Doggo";
        })
})
