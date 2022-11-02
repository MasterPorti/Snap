const mobileNav = document.getElementById("nav-mobile")
const features = document.getElementById("features")
const company  = document.getElementById("company")


function activeNavMobile(){
    mobileNav.classList.toggle("hide")
}

function activeFeatures(){
    features.classList.toggle("hide")
}

function activeCompany(){
    company.classList.toggle("hide")
}