import React from 'react'
import github from '../assets/github.png';

function Projects() {
  return (
    <div className="h-screen content-center">
        <div class="container">
         <div class="card__container">
            <article class="card__article">
               <img src={github} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src={github} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Poon Hill, Nepal</span>
                  <h2 class="card__title">Starry Night</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src={github} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Bojcin Forest, Serbia</span>
                  <h2 class="card__title">Path Of Peace</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>
         </div>
      </div>
    </div>
  )
}

export default Projects