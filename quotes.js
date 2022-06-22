var quote = ["To handle yourself, use your head; to handle others, use your heart. " , "Strive not to be a success, but rather to be of value." ,"I alone cannot change the world, but I can cast a stone across the water to create many ripples"
, "Certain things catch your eye, but pursue only those that capture the heart." ,"A person who never made a mistake never tried anything new."]

var newQuotes = document.querySelector('h1')
var clickQ = document.querySelector('#changeQuotes')
var changebackg= document.querySelector('body')



changebackg.style.backgroundImage = 'url("https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/purposeoflife.jpg?itok=G_3RzDjy")'

var imageOne = 'url("https://assets.entrepreneur.com/content/3x2/2000/20190710155046-shutterstock-1413741407.jpeg")'
var imageTwo = 'url("https://ptchoedspruit.com/wp-content/uploads/2021/08/Where-are-you-going-in-life.jpeg")'
var imageThree = 'url("https://knowledge.insead.edu/sites/www.insead.edu/files/images/2020/04/gettyimages-628537464-1.jpg")'
var imageFour  = 'url("https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/purposeoflife.jpg?itok=G_3RzDjy")'

let imgContainer = [imageOne, imageTwo, imageThree, imageFour]

let i = 0;
function changebg() {
    changebackg.style.backgroundImage = imgContainer[i]
    i++
    if(i >= imgContainer.length){
      i = 0
  }
}
  setInterval(changebg, 5000)



newQuotes.style.color = 'green'
toggle = false
var color = ['green','red']

function changeColor() {
    newQuotes.style.color = toggle ? color[0] : color[1]
    toggle =!toggle
}
    
setInterval(changeColor,5000)
clickQ.addEventListener('click',changeColor)

var pos = 0
function changeQuotes() {
    newQuotes.textContent = quote[pos]
    pos++
    if (pos >= quote.length) {
     pos = 0
        }
}

setInterval(changeQuotes, 5000);

clickQ.addEventListener('click',changeQuotes)