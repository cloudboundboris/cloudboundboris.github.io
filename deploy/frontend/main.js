window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});



const functionApi = 'AccountEndpoint=https://azureresumedb.documents.azure.com:443/;AccountKey=t0a2vuoNyRhFreDOFBaA4sGGN6P7BN5KEbB4dMYaVQgYPlBe20KbrLgEa1MCwyASaYar8rHW2VOSnEwB4B5kRA==;'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("###### called function ####### ");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
