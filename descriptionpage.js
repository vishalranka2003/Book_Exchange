$(function () {
  $(".HeartAnimation").click(function () {
    $(this).toggleClass("animate");
  });
});
let ba;

const arr = [
  {
    id: 1,
    name: "One Indian Girl",
    description:
      "One Indian Girl is a novel by the Indian author Chetan Bhagat. The book is about a girl named Radhika Mehta, who is a worker at the Distressed Debt group of Goldman Sachs, an investment bank. ",
    reviewsno: "328",
    price: "120",
    votes: "872",
    images: "1.webp",
    likedexchangers: "98",
    image1: "100.jpg",
    image3: "100.jpg",
    image5: "100.jpg",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
  {
    id: 2,
    name: "2 States",
    description:
      "The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry. It is narrated from a first-person point of view in a humorous tone, often taking digs at both Tamil and Punjabi cultures.",
    reviewsno: "426",
    price: "250",
    likedexchangers: "82",
    votes: "352",
    images: "2.jpg",
    image1: "200.jpg",
    image3: "200.jpg",
    image5: "200.jpg",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
  {
    id: 3,
    name: "Half Girlfriend",
    description:
      "Madhya and Riya's 'Half Girlfriend' story s tells us why it is important to love, sacrifice and never let go of the one person who makes your world a better place.Madhav and Riya become close 'friends' due to their association with basketball. Madhav wants to make her his girlfriend, but she refuses.",
    reviewsno: "524",
    price: "180",
    likedexchangers: "76",
    votes: "858",
    images: "3.webp",
    image1: "",
    image3: "",
    image5: "",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
  {
    id: 4,
    name: "The Girl in Room",
    description:
      "The book became a bestseller based on prearranged sales alone. It tells about an IIT coaching class tutor who goes to wish his ex-girlfriend on her birthday and finds her murdered. The rest of the story is his journey where he stands by his ex-girlfriend after her death to find justice.",
    reviewsno: "625",
    price: "320",
    likedexchangers: "83",
    votes: "572",
    images: "4.jpg",
    image1: "",
    image3: "",
    image5: "",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
  {
    id: 5,
    name: "India Positive",
    description:
      "What's 'India Positive' About? In these thought-provoking essays and columns, Chetan Bhagat challenges the popular view that nothing in India has changed during the last decade and discusses ways in which members of the public can play their part in the nation's development.",
    reviewsno: "723",
    price: "340",
    likedexchangers: "71",
    votes: "976",
    images: "5.jpg",
    image1: "",
    image3: "",
    image5: "",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
  {
    id: 6,
    name: "One Arranged Murder",
    description:
      "Saurabh Maheshwari is engaged to Prerna Malhotra. His wedding is three months away. On the night of Karva Chauth, however, Prerna is murdered after being pushed from her terrace. With Inspector Vijender sss Singh and aided by ACP Rana, the case is investigated by Saurabh and Keshav Rajpurohit.",
    reviewsno: "492",
    price: "80",
    likedexchangers: "62",
    votes: "282",
    images: "6.jpg",
    image1: "",
    image3: "",
    image5: "",
    image4: "101.jpeg",
    image2: "101.jpeg",
  },
];

for (let i = 0; i < localStorage.length; i++) {
  let x;
  x = localStorage.key(i);
  let y;
  y = localStorage.getItem(x);
  if (x == y) {
    let change = document.querySelector(".mainpage");
    change.innerHTML = locationa(x);
    localStorage.removeItem(x);
    break;
  }
}

function locationa(ba) {
  let arra = arr[ba - 1];
  return `<div id="navigation"></div>
    <div class="container">
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1" style="background-image: url(images/${arra.images});" ></div>
                        </div>
                        <ul class="preview-thumbnail nav nav-tabs">
                            <li class="active"><a data-target="#pic-1" data-toggle="tab"><img
                                        src="images/${arra.image1}"" /></a></li>
                            <li><a data-target="#pic-2" data-toggle="tab"><img src="images/${arra.image2}" /></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src="images/${arra.image3}"" /></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src="images/${arra.image4}"" /></a></li>
                            <li><a data-target="#pic-5" data-toggle="tab"><img src="images/${arra.image5}"" /></a></li>
                        </ul>

                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">${arra.name}</h3>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <span class="review-no">${arra.reviewsno} reviews</span>
                        </div>
                        <p class="product-description">${arra.description}
                        </p>
                        <h4 class="price">Book price: <span>Rs.${arra.price}</span></h4>
                        <p class="vote"><strong>${arra.likedexchangers}%</strong> of the exchangers enjoyed this product! <strong>(${arra.votes}
                                votes)</strong>
                        </p>
                        
                        <h5 class="colors">colors:
                            <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                            <span class="color green"></span>
                            <span class="color blue"></span>
                        </h5>
                        <div class="action">
                            <button class="add-to-cart btn btn-default" type="button" onclick="addedtocart();">add to
                                cart</button>
                                <button class= "like btn btn-defalt HeartAnimation"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
