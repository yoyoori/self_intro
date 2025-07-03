const profilePhoto = document.querySelector(".profile-photo");

profilePhoto.addEventListener("click", ()=>{
//    if(document.body.className == 'dark-mode'){
//        document.body.className = '';
//    } else{
//        document.body.className ="dark-mode";
//    }
document.body.classList.toggle('dark-mode');
});

/*const sections = document.querySelectorAll(".right_container section");

sections.forEach((section, index)=> {
    section.style.display = index === 0 ? "flex" : "none";
});

for (let index=0; index < sections.length; index++) {
    section.addEventListener('click', function(event) {
        const secitonWidth = section.offsetWidth;

        const clickX = event.client - section.getBoundingClientRect().left;

        if(clickX<secitonWidth/2){
            if(index != 0){
                section.style.display='none';
                sections[index-1].style.display = 'flex';
            }
        }else{
            if(index !=section.length-1){
                section.style.display = "none";
                section[index + 1].style.display = "flex";
            }
        }
    });
}*/

const sections = document.querySelectorAll(".right_container section")
let currentIndex = 0;

sections.forEach((section, index) => {
    section.style.display = index === 0? "flex" : "none";
});

sections.forEach((section, index) => {
    section.addEventListener("click", function(event){
        const secitonWidth = section.offsetWidth;

        if (clickX < sectionWidth / 2){
            if (index !=0){
                section.style.display = "none";
                sections[index -1].style.display = "flex";
                currentIndex = currentIndex - 1;
            } 
        } else{
            if (index != sections.length -1){
                section.style.display = "none";
                sections[index - 1].stlye.display = "flex";
                currentIndex = currentIndex + 1;
            }
        }
    })
});

setInterval(()=>{
    sections[currentIndex].style.display = "none";
    if(currentIndex==(section.length-1)){
        currentIndex = 0;
    }else{
        currentIndex = currentIndex + 1;
    }

    sections[currentIndex].style.display = "flex";
}, 3000);