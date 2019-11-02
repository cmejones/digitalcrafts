// Part 1 - .then() chaining

// Given an array of urls:

const urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];
// Use axios.get() and a chain of .then() calls to fetch these URLs one by one. 
// After each .get() is done, console log "data was fetched!". 
// You should see 5 separate log statements staggered in time.

// axios.get('https://dog.ceo/api/breed/beagle/images/random')
// .then (response => {
//     console.log("data was fetched!", response.data.message);
//     return axios.get('https://dog.ceo/api/breed/chow/images/random');
// })
// .then (response => {
//     console.log("data was fetched!", response.data.message);
//     return axios.get('https://dog.ceo/api/breed/akita/images/random');
// })
// .then (response => {
//     console.log("data was fetched!", response.data.message);
//     return axios.get('https://dog.ceo/api/breed/dingo/images/random');
// })
// .then (response => {
//     console.log("data was fetched!", response.data.message);
//     return axios.get('https://dog.ceo/api/breed/eskimo/images/random');
// })
// .then (response => {
//     console.log("data was fetched!", response.data.message);
// })
// .catch(error => {
// //
// });

const p0 = axios.get(urls[0]);
const p1 = axios.get(urls[1]);
const p2 = axios.get(urls[2]);
const p3 = axios.get(urls[3]);
const p4 = axios.get(urls[4]);

Promise.all([p0,p1,p2,p3,p4]) 
    .then(responses => {
        console.log("all requests are finished");
        console.log(responses);
        console.log(responses[0].data.message);
        console.log(responses[1].data.message);
    });

