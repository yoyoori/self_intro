const profilePhoto = document.querySelector(".profile-photo");

profilePhoto.addEventListener("click", ()=>{
//    if(document.body.className == 'dark-mode'){
//        document.body.className = '';
//    } else{
//        document.body.className ="dark-mode";
//    }
document.body.classList.toggle('dark-mode');
});

let sections = document.querySelectorAll(".right_container section");
let currentIndex = 0;

sections.forEach((section, index)=> {
    section.style.display = index === 0 ? "flex" : "none";
});

const showAfterSection = () => {
    sections.forEach((section)=> {
        section.style.display = "none";
    });
    if (currentIndex == sections.length - 1){
        currentIndex = 0;
    } else{
            currentIndex++;
    }
    sections[currentIndex].style.display = "flex";
    };

const showBeforeSection = () =>{
    sections.forEach((section, index) =>{
        section.style.display = "none";
    });
    if  (currentIndex == 0){
        currentIndex = sections.length -1;
    } else{
        currentIndex--;
    }
    sections[currentIndex].style.display = "flex";
};

let intervalId = setInterval(showAfterSection, 3000);

const resetInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(showAfterSection, 3000);
};

sections.forEach(section, index) = () => {
    section.addEventListener("click", (event) => {
        const sectionWidth = section.offsetWidth;
        const clickX = event.clickX - section.getBoundingClientRect().left;
        if(clickX < sectionWidth/3){
            showAfterSection();
        }else if(clickX > (sectionWidth * 2) /3){
            showAfterSection();
            resetInterval();
        } else{
            if(intervalId){
                clearInterval(intervalId);
                intervalId = null;
            } else{
                intervalId = setInterval(showAfterSection, 3000);
            }
        }
    })
}

fetch("https://m.search.naver.com/p/csearch/content/apirender.nhn?where=nexearch&pkid=387&u2=200540505&q=생년월일+운세&u1=f&u3=solar&u4=12&_=1719518803829")
 .then((response) => response.json())  // 응답을 JSON으로 파싱
    .then(data => {
        const htmlString = data.flick[0]; // 첫 번째 항목 선택
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const fortune = doc.querySelector('dd b').textContent;
        const fortuneText = doc.querySelector('dd p').textContent;
        console.log(fortune); // 추출한 텍스트 출력
        console.log(fortuneText); // 추출한 텍스트 출력

        const fortuneSection = document.createElement("section");
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = "오늘의 운세";
        const fortuneE = document.createElement("h3");
        fortuneE.style.margin = 0;
        fortuneE.textContent = fortune;
        const fortuneTextE = document.createElement("p");
        fortuneTextE.textContent = fortuneText;

        fortuneSection.append(sectionTitle);
        fortuneSection.append(fortuneE);
        fortuneSection.append(fortuneTextE);

        const contactSection = document.querySelector(".contact");
        contactSection.after(fortuneSection);
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

/*const sections = document.querySelectorAll(".right_container section")
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
}, 3000);*/