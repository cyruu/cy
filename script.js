
const menuItems = document.querySelectorAll(".menu-item");
const indicator = document.querySelector(".indicator");
const pages = document.querySelectorAll(".sections");
const codeTags = document.querySelectorAll(".code-tag")
const socialIcons = document.querySelectorAll(".fa-brands");
const linkcontainers = document.querySelectorAll(".link-container");
const socialLinkContainers = document.querySelectorAll(".social-link-container");
const instaBg = document.querySelector(".insta-bg");
const githubBg = document.querySelector(".github-bg");
const fbBg = document.querySelector(".fb-bg");
const slideInItems = document.querySelectorAll(".slide-in");
const ProfileImage = document.querySelector(".image-slide");
const homeBackground = document.querySelector(".home-bg")

//slide for aal slide-in class in animation
const slideInOnVIew = new IntersectionObserver (
    entries => {
        entries.forEach(
            entry => {
                // console.log(entry)
                if(entry.isIntersecting)
                {
                    // console.log('inter')
                    entry.target.classList.add("slide-right");
                    ProfileImage.classList.add("image-slide-down");
                    // pages[0].style.backgroundImage = "linear-gradient(90deg,rgb(255, 255, 255) 65%,var(--default_color) 10%)";
                    homeBackground.classList.add("home-slide-left");
                }
                else if(!entry.isIntersecting)
                {
                    
                    entry.target.classList.remove("slide-right");
                    ProfileImage.classList.remove("image-slide-down");
                    // pages[0].style.backgroundImage = "linear-gradient(0deg,rgb(255, 255, 255) 65%,var(--default_color) 10%)";
                    homeBackground.classList.remove("home-slide-left");
                }
            }
        )
    },
    {
        threshold: .99,
        
    }
)

slideInItems.forEach(
    slideInItem => {
        slideInOnVIew.observe(slideInItem);
    }
)
//profile oimage slide down (ionly one)
// const imageSlideDown = new IntersectionObserver(
//     entries => {
//         entry = entries[0];
//         if(entry.isIntersecting)
//         {
//             console.log("prof")
//             entry.target.classList.add("image-slide-down")
//         }
//         else if(!entry.isIntersecting)
//         {
//             entry.target.classList.remove("image-slide-down")
//         }
//     },
//     {
//         threshold: 0,
//     }
// )

// imageSlideDown.observe(ProfileImage)
//set pointer ecent functiond ofr icons
function setPointerAll () {
    socialLinkContainers.forEach(socialLinkContainer => {
        socialLinkContainer.style.pointerEvents = "all";
    })


}
function setPointerNone () {
    socialLinkContainers.forEach(socialLinkContainer => {
        socialLinkContainer.style.pointerEvents = "none";
    })
    
}
// pop up on view social icons
const homePageIconObserver = new IntersectionObserver (
    entries => {
        const homePage=entries[0];
        if(homePage.isIntersecting)
        {
            
            // bgFill.forEach(bg => {
        
            //     bg.style.opacity = 1;
            // })
            setTimeout(setPointerAll,1200);
            instaBg.style.transition = "0s ease .8s";
            githubBg.style.transition = "0s ease 1s";
            fbBg.style.transition = "0s ease 1.2s";
            // instaBg.style.opacity = 1;
            // githubBg.style.opacity = 1;
            // fbBg.style.opacity = 1;
            instaBg.style.transform = "scale(1)";
            githubBg.style.transform = "scale(1)";
            fbBg.style.transform = "scale(1)";
            socialIcons.forEach(
                icon => {
                    
                    

                    icon.style.transform = "scale(1)";
                    
                    
                    
                }
            )
            
        }
       
        if(!homePage.isIntersecting)
        {
          
            setTimeout(setPointerNone,00);
    
            instaBg.style.transition = ".8s";
            githubBg.style.transition = "1s";
            fbBg.style.transition = "1.2s";
            socialIcons.forEach(
                icon => {
                    icon.style.transform = "scale(0)";
                }
            )
            // bgFill.forEach(bg => {
            
            //     bg.style.opacity =0;
            // })
            instaBg.style.transform = "scale(0)";
            githubBg.style.transform = "scale(0)";
            fbBg.style.transform = "scale(0)";
            
        }

    },
    {
        threshold:.85,
    }
)

homePageIconObserver.observe(pages[0]);

let currentMenu ="";
//observe each sections
function observeAllSection()
{
    pages.forEach(
        page => {
            updateIndicatorOnScroll.observe(page);
        }
    )
}


//slide the indicator on intersection
const updateIndicatorOnScroll = new IntersectionObserver (
    entries => {
        entries.forEach(
            entry => {
                if(!entry.isIntersecting)
                    return;
                else if (entry.isIntersecting)
                {
                    sectionId = entry.target.id;
                    if(sectionId=="home"){
                        currentMenu="home";
                        indicator.style.left = "40px";
                        
                        if(currentMenu=="home")
                            menuItems[0].classList.add("active");
                        //remove active from all items
                        for(let i=0;i<4;i++)
                        {
                            if(i!=0)
                                menuItems[i].classList.remove("active");
                        }
                        
                        
                    }
                    else if(sectionId=="aboutme"){
                        currentMenu="aboutme";
                        indicator.style.left = 40+130+"px";
                        menuItems[1].classList.add("active");
                        if(currentMenu=="aboutme")
                            menuItems[1].classList.add("active");
                        //remove active from all items
                        for(let i=0;i<4;i++)
                        {
                            if(i!=1)
                                menuItems[i].classList.remove("active");
                        }

                        
                    }
                    else if(sectionId=="project"){
                        currentMenu="project";
                        indicator.style.left = 40+2*130+"px";
                        menuItems[2].classList.add("active");
                        if(currentMenu=="project")
                            menuItems[2].classList.add("active");
                        //remove active from all items
                        for(let i=0;i<4;i++)
                        {
                            if(i!=2)
                                menuItems[i].classList.remove("active");
                        }
                    }
                    else if(sectionId=="contact"){
                        currentMenu="contact";
                        indicator.style.left = 40+3*130+"px";
                        menuItems[3].classList.add("active");
                        if(currentMenu=="contact")
                            menuItems[3].classList.add("active");
                        //remove active from all items
                        for(let i=0;i<4;i++)
                        {
                            if(i!=3)
                                menuItems[i].classList.remove("active");
                        }
                    }
                }
            }
        )
    }
    ,
    {
        threshold:.50,
        rootMargin:"100px 0px 0px -100px",
        
    }
    
)

const reobserveAfterSkipping = new IntersectionObserver(
    entries =>
    {
        let loadedPage = entries[0];
        
        if(loadedPage.isIntersecting)
        {
            observeAllSection();
        }
    },
    {
        threshold:.8,
    }
)


//selecting skip menu item on click
menuItems.forEach(
    menuItem =>
    {
        menuItem.addEventListener("click", ()=>
        {
            menuId = menuItem.id;
            
            //home btn
            if(menuId==1)
            {
                if(currentMenu=="project")
                {
                    //ignore about me
                    updateIndicatorOnScroll.unobserve(pages[1]);
                }
                if(currentMenu=="contact")
                {
                    //ignore about me
                    updateIndicatorOnScroll.unobserve(pages[1]);
                    //ignore project
                    updateIndicatorOnScroll.unobserve(pages[2]);
                }
                reobserveAfterSkipping.observe(pages[0]);
                
            }
            //aboutme btn
            if(menuId==2)
            {
                if(currentMenu=="contact")
                {
                    //ignore project
                    updateIndicatorOnScroll.unobserve(pages[2]);
                }
                reobserveAfterSkipping.observe(pages[1])
                
            //project btn
            if(menuId==3)
            {
                if(currentMenu=="home")
                {
                    //ignore aboutme
                    updateIndicatorOnScroll.unobserve(pages[1]);
                }
                reobserveAfterSkipping.observe(pages[2]);
                    
            }
            //contact btn
            if(menuId==4)
            {
                if(currentMenu=="home")
                {
                    //ignore aboutme
                    updateIndicatorOnScroll.unobserve(pages[1]);
                    //ignore project
                    updateIndicatorOnScroll.unobserve(pages[2]);
                }
                else if(currentMenu=="aboutme")
                {
                    //ignore project
                    updateIndicatorOnScroll.unobserve(pages[2]);
                }
                reobserveAfterSkipping.observe(pages[3]);
                    
            }
        }
        })
    }
)

observeAllSection();