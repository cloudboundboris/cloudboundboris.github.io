window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});



const functionApi = 'https://acgazureresume.documents.azure.com:443/;AccountKey=GWF9njv8b19TI6M3mauyR24DewCrqLGn59yJRMTe7lM7HOmyJCcaSMpUfBQQmvbLOEFezhKZM5Abqpj1WY5Hog==;'; 

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
