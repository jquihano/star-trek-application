document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value;
    try {
        const response = await fetch(`https://star-trek-api-v1.herokuapp.com/api/${alienName}`);
        const data = await response.json();
        console.log(data)
        document.querySelector('#alienName').innerText = data.speciesName;
        document.querySelector('#alienWorld').innerText = data.homeworld;
        document.querySelector('#alienFeatures').innerText = data.features;
        document.querySelector('#alienFacts').innerText = data.interestingFact;
        document.querySelector('#alienExamples').innerText = data.notableExamples;
        document.querySelector('#alienImage').src = data.image;
    } catch (error) {
        console.log('There was an error')
    }
}