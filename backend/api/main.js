window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount;

})

const functionApi = '';
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()  
    }).then(response => { 
        console.log("called function and "& response.json &" retreived");
          count = response.count;
          document.getElementById("counter").innerText = count;

    }).catch(function(error){
        log.console(error);
    });
    return count;
}

        
        


