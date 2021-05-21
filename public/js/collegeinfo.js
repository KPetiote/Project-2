var apiKey = "gCEGwJxEOn1NjWm0Tc7WXsAPInOPbKvU4wE1Jwqz";
var myCollege = "";





var collegeAtm = (event) => {
    
    let college = $('#search-college').val();
    myCollege= $('#search-college').val();
    // imperial is used to get farenheit instead of Celsius
    let queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools?" + "school.name=" + college + "&api_key=" + apiKey;
    // GET request to receive json from the openWeather API.
    fetch(queryURL)
    .then((response) => {
        if (response.ok) {
        return response.json();
      } else {
          throw new Error('Something went wrong');
      }
    })
    .then((response) => {
      
        let collegeJson = response;
        
        
    
        // Display aspects of the weather in HTML
        let addCollege = `
            
            <h3> ${collegeJson.results[0].school.name}   </h3>
            <h3> Tuition(per year) </h3> 
            <h3> In State: $${collegeJson.results[0].latest.cost.tuition.in_state} </h3>
            <h3> Out of State: $${collegeJson.results[0].latest.cost.tuition.out_of_state} </h3>
            <h3> Undergrad size: ${collegeJson.results[0].latest.student.size} </h3>
            <h3> Salary after completing: $${collegeJson.results[0].latest.earnings["6_yrs_after_entry"].median}- $${collegeJson.results[0].latest.earnings["7_yrs_after_entry"].mean_earnings} </h3>
            
            
            `;
        
        $('#current-college').html(addCollege);
        collegeEvent(event);
        
    })
}

var  collegeEvent = (event) => {
    let college = $('#search-college').val();
 
    let queryURL =  "https://api.data.gov/ed/collegescorecard/v1/schools?" + "school.name=" + college + "&api_key=" + apiKey;
  
    fetch(queryURL)
        .then((response) => {
            if (response.ok) {
            return response.json();
           }else {
            throw new Error('Something went wrong');   
           }
        })
        .then((response) => {
        
        let degreeList = `
        <h2 style="text-align: center;">  Offered Programs</h2>
        <div id="offered-degrees" class="d-inline-flex flex-wrap ">`;
    
        for (let i = 0; i < 91; i++) {
            if (response.results[0].latest.programs.cip_4_digit[i].credential.level == 3) {
            let degreeData = response.results[0].latest.programs.cip_4_digit[i].title;
            
             degreeList += `
             <div class="weather-card ">
                <ul class="list-unstyled">
                    ${degreeData}
                </ul>
                </div>`;
                
            }
        }
        
        

      //iterating through every 8th result in json response to display 5 days.        
        
        // Add to DOM
        $('#programs').html(degreeList);
       
    })
}



// New city search button event listener
$('#search-button').on("click", (event) => {
event.preventDefault();
myCollege = $('#search-college').val();
collegeAtm(event);
});



//call weatherAtm function
collegeAtm();
