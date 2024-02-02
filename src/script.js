const navButtons = document.querySelectorAll(".btn_rightNav");
const cssStyleSheet = document.querySelector("#cssStyle");
const searchForm = document.querySelector("form");
const searchForm_Input = document.querySelector("#content_form #searchInput_content_form");
const goButtons = document.querySelectorAll(".go-btn");
const version = document.querySelector("h5");
const cards = 3;
const allUrls = {
    about : {url : "https://www.google.com"},
    about_Sites : {url : "./pages/ABOUT-SITE_PAGE/index.html"},
    sites : {url : "./pages/SITES_PAGE/index.html"},
    api : {url : "./pages/API_PAGE/index.html"},
    ui_Css : {url : "./pages/UI-PAGE/index.html"},
};
//forEach  For Nav
const go = (link) => {
        window.location.href = link;
};

navButtons.forEach((allnavBtn)=>{
    allnavBtn.addEventListener('click',(btn)=>{
        if (btn.target.id==="about"){
            go(allUrls.about.url);
        }else if (btn.target.id==="about_site"){
            go(allUrls.about_Sites.url);
        }else if (btn.target.id==="sites"){
            go(allUrls.sites.url)
        }else if (btn.target.id==="Ui"){
            go(allUrls.ui_Css.url);
        }else if(btn.target.id==="Api"){
            go(allUrls.api.url)
        }else{
            console.error("errr")
        }
    });
});

