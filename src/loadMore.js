import { fetchPictures } from "./index";
import { refs } from "./index";
import { fetchData } from "./index";
import { page } from "./index";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let totalHits;

refs.loadMoreBtn.addEventListener('click', loadMore);

function loadMore(e) {
    totalHits = fetchData.totalHits;
    const numberOfPages = Math.ceil(totalHits / 40);
    console.log(page)
    console.log(numberOfPages)
    if (page <= numberOfPages) {
        fetchPictures(e);
        console.log(page);
    } else {
        endOfPictures();
    }
 
  
}

function endOfPictures() {
    refs.loadMoreBtn.style.display = "none";
    Notify.info("We're sorry, but you've reached the end of search results");
}
