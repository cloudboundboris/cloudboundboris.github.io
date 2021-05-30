window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});



const functionApi = 'https://blacgresumecouter.azurewebsites.net/api/GetResumeCounter?code=YcOepru716exyqLmGeHgK3Kqf/3noG3FmjFLx3r4xF8kILWWKzOSNQ=='; 

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
