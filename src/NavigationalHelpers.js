export const ScrollTo = () => {
    // document.querySelector('#top-page').scrollIntoView({
    //     behavior: 'smooth'
    // });
    // now account for fixed header
    // const scrolledY = window.scrollY;
    // const yourHeight = 150;

    // if(scrolledY){
    // window.scroll(0, scrolledY - yourHeight);
    // }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

