export const portfolioImagesSansIndex = [
  {
    src: '/assets/16by9.jpg',
    loading: 'lazy',
    alt: '16 by 9 Productions',
  },
  {
    src: '/assets/ariafoodmusicarts.jpg',
    loading: 'lazy',
    alt: 'ARIA - Food, Music and Art',
  },
  {
    src: '/assets/armsandtheman.jpg',
    loading: 'lazy',
    alt: 'Arms & The Man',
  },
  {
    src: '/assets/bestaudio.jpg',
    loading: 'lazy',
    alt: 'Best Audio',
  },
  {
    src: '/assets/brandwerkz.jpg',
    loading: 'lazy',
    alt: 'Brandwerkz',
  },
  {
    src: '/assets/endgods2.jpg',
    loading: 'lazy',
    alt: 'End Gods Mobile Game',
  },
  {
    src: '/assets/gamex.jpg',
    loading: 'lazy',
    alt: 'GameX Promotional Material',
  },
  {
    src: '/assets/gimzuashop.jpg',
    loading: 'lazy',
    alt: 'Gimzua House',
  },
  {
    src: '/assets/greatchinaiowa.jpg',
    loading: 'lazy',
    alt: 'Great China Iowa',
  },
  {
    src: '/assets/japantheatre.jpg',
    loading: 'lazy',
    alt: 'Ichikawa Ebizo - Japan Theater',
  },
  {
    src: '/assets/japantheatre2-2.jpg',
    loading: 'lazy',
    alt: 'Ichikawa Ebizo - Japan Theater',
  },
  {
    src: '/assets/lianggekcheng.jpg',
    loading: 'lazy',
    alt: 'Liang Gek Cheng',
  },
  {
    src: '/assets/nostalgicmoment.jpg',
    loading: 'lazy',
    alt: 'Nostalgic Moment Wedding Photography',
  },
  {
    src: '/assets/pocketbar.jpg',
    loading: 'lazy',
    alt: 'Pocket Bar Concepts',
  },
  {
    src: '/assets/portfolio.jpg',
    loading: 'lazy',
    alt: 'Summer Curtains',
  },
  {
    src: '/assets/vintageinn.jpg',
    loading: 'lazy',
    alt: 'Vintage Inn',
  },
  {
    src: '/assets/yenjiclaycraft2.jpg',
    loading: 'lazy',
    alt: 'Yenji Claycraft',
  },
  {
    src: '/assets/ourfoundingfather.jpg',
    loading: 'lazy',
    alt: 'Our Founding Father T-shirt Shop',
  },
  {
    src: '/assets/gardencityfrontplacement.jpg',
    loading: 'lazy',
    alt: 'Singapore, Garden City T-shirt',
  },
  {
    src: '/assets/merdekafrontplacement.jpg',
    loading: 'lazy',
    alt: 'Merdeka T-shirt',
  },
  {
    src: '/assets/FoodSpace-.jpg',
    loading: 'lazy',
    alt: 'Food Space Mobile App',
  },
  {
    src: '/assets/FreenaApp.jpg',
    loading: 'lazy',
    alt: 'Freena Mobile App',
  },
  {
    src: '/assets/poster-4b.jpg',
    loading: 'lazy',
    alt: 'Organje Movers Advertisement',
  },
  {
    src: '/assets/scrypinvitation1.jpg',
    loading: 'lazy',
    alt: 'Scrip Invitation',
  },
  {
    src: '/assets/scrypinvitation2.jpg',
    loading: 'lazy',
    alt: 'Scrip Invitation',
  },
  {
    src: '/assets/TREBOL-Catalog3.jpg',
    loading: 'lazy',
    alt: 'TREBOL Product Catelog',
  },
  {
    src: '/assets/trebollabeling.jpg',
    loading: 'lazy',
    alt: 'TREBOL Product Packaging',
  },
  {
    src: '/assets/desmoines.jpg',
    loading: 'lazy',
    alt: 'Des Moines, Window View',
  },
]

export const portfolioImages = portfolioImagesSansIndex.map((image, index) => {
  return {
    src: image.src,
    loading: image.loading,
    alt: image.alt,
    index: index + 1,
  }
})

console.log(portfolioImages)
