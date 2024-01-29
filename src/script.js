const allUrls = {
    about : {url : "https://www.google.com"},
    about_Sites : {url : "https://www.google.com"},
    sites : {url : "https://www.google.com"},
    api : {url : "https://www.google.com"},
    ui_Css : {url : "https://www.google.com"},
}
const navButtons = document.querySelectorAll(".btn_rightNav");
const cssStyleSheet = document.querySelector("#cssStyle");
//forEach  For Nav

const go = (link) => {
        window.location.href = link;
};

navButtons.forEach((allBtn)=>{
    allBtn.addEventListener('click',(btn)=>{
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