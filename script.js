 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user

	        const area = 3.14*radius*radius;
	        let ans = document.getElementById("ans");
	        ans.textContent = area;
           
}
calculateArea();
