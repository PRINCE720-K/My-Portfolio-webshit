function showProject(){
    let projects=
    document.getElementById("more-Projects");
    if(projects.style.display == "grid"){
        projects.style.display="none";
    }else{
        projects.style.display="grid";
    }
}

var typed = new Typed('#element', {

         strings: [
            'Full Stack Developer',
            'Python Developer',
            'BSc Computer Science Student'
         ],

         typeSpeed: 60,
         backSpeed: 40,
         loop: true

      });
