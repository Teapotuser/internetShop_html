const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      // searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      // will be called whenever window size changes
window.addEventListener('resize', function() {
	// viewport and full window dimensions will change
	
	var viewport_width = window.innerWidth;
	// var viewport_height = window.innerHeight;
    if (viewport_width < 900){
        if(!sidebar.classList.contains("close")){
            sidebar.classList.add("close");
            toggle.style.pointer="none";       
        }
    }
});




toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

/* searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
}) */

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});