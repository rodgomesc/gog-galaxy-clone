const idxToPixels = (idx) => {
    return {
        1:0,
        2:1530,
        3:3060,
        4:4590
    }[idx]
}

const changeSlide = (idx, secname) => {

    const scrollOfset = idxToPixels(idx)

    const slider = document.getElementsByClassName (secname)[0]
    slider.scrollTo({top: 0, left: scrollOfset, behavior: "smooth"});
    
}