// Comments Section Javascript 
// Select Relevant Sections
let commentSection = document.querySelector(".comments");

let commentField = document.querySelector(".comments__ctn");

let userCommentCtn = document.querySelector(".user__comments-ctn")

let nameField = document.querySelector(".comments__name");

let userComment = document.querySelector(".comments__field");

let submitBtn  = document.querySelector(".comments__btn");


// Comments Array
const comments = [
    {
     name:"Micheal Lyons", 
     timestamp:"12/18/2018",
     comment: "They BLEW the ROOF off their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER wistnessed",
     image: '../../assets/images/spirit-animal-1.jpg'
    },
    {
     name:"Gary Wong",
     timestamp: "12/12/2018",
     comment: "Everytime I see him shred I feel so motivated to get off my couch and hop on my board. Hw's so talented! I wish I can ride like him one day so I can really enjoy myself!",
     image: '../../assets/images/puppy-2.jpg'   
    },
    {
     name: "Theodore Duncan ",
     timestamp: "11/15/2018",
     comment: "How can someone be so good!!! Yo can tell he lives for this and loves to do it everyday. Everytime I see him I feel instantly happy! He's definitely my favorite ever",   
     image: '../../assets/images/puppy-1.jpg'
    }
];


// Generate Comments HTML
let displayComment = (commentData) => {

    // Add Div for Comments to page
    let commentSpace = document.createElement('div');
    commentSpace.classList.add("gen-comment");

    let userName = document.createElement("h4");
    let userTime = document.createElement("p");
    let userComment = document.createElement("p");
    let imageCtn = document.createElement("div");
    let userImage = document.createElement("img");
    let commentInfoCtn =  document.createElement("div");
    commentInfoCtn.classList.add("gen-comment__ctn");

    userName.innerText = commentData.name;
    userName.classList.add("users__name");
    commentInfoCtn.appendChild(userName);
    commentSpace.appendChild(commentInfoCtn);
    console.log(userName);

    userTime.innerText = commentData.timestamp;
    userTime.classList.add("users__time");
    commentInfoCtn.appendChild(userTime);
    commentSpace.appendChild(commentInfoCtn);
    console.log(userTime);

    userComment.innerText = commentData.comment;
    userComment.classList.add("users__comment");
    commentInfoCtn.appendChild(userComment);
    commentSpace.appendChild(commentInfoCtn);
    console.log(userComment);

    userImage.src = commentData.image;
    userImage.classList.add("user-image");
    imageCtn.classList.add("img-ctn");
    imageCtn.appendChild(userImage);
    commentSpace.appendChild(imageCtn);

    return commentSpace;
}

comments.forEach((comment) => {
    let commentSpace = displayComment(comment);
    userCommentCtn.appendChild(commentSpace);
});


// Select and Create individual container for form elements to allow for easy flex application
let commentForm = document.querySelector(".comments__form");

let formImageCtn = document.createElement("div");
formImageCtn.classList.add("img-ctn");
let formImage = document.createElement("img");
formImage.classList.add("user-image");
formImage.src = "../../assets/images/Mohan-muruge.jpg"
formImageCtn.appendChild(formImage);
commentForm.appendChild(formImageCtn);

let commentTitle = document.querySelector(".comments__title");
let commentTitle2 = document.querySelector(".comments__title-2");
let commentName = document.querySelector(".comments__name");
let commentInput = document.querySelector(".comments__field");
let commentBtn = document.querySelector(".comments__btn");

let formInfoCtn = document.createElement("div");
formInfoCtn.classList.add("form-info-ctn");

formInfoCtn.appendChild(commentTitle);
formInfoCtn.appendChild(commentName);
formInfoCtn.appendChild(commentTitle2);
formInfoCtn.appendChild(commentInput);
formInfoCtn.appendChild(commentBtn);

commentForm.appendChild(formInfoCtn);


// Add event listener to comment form which created new Comment object and prepends to page with random image
commentForm.addEventListener('submit', e => {
    e.preventDefault();
    // Define an array with image fil paths
    let ranUserImg = ['../../assets/images/puppy-3.jpg', '../../assets/images/puppy-4.jpg',
    '../../assets/images/puppy-5.jpg', '../../assets/images/cat-1.jpg', '../../assets/images/cat-2.jpg',
    '../../assets/images/cat-3.jpg'    
    ];
    // write a function that takes the image array and runs Math.'' to select a random image
    // Function will return the image
    ranImg = (imgArr) => {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
    let newUser = e.target.userName.value;
    let newComment = e.target.userVoice.value;
    let commentDate = new Date();
    // variable to hold the function invoked on my random user image array
    let newUserImg = ranImg(ranUserImg);

    let newCommentData = {
        name: newUser,
        timestamp: (commentDate.getMonth()+1)+'/'+commentDate.getDate()+'/'+commentDate.getFullYear(),
        comment: newComment,
        // new comment Data Key value pair to hold function "is this a method?"
        image: newUserImg
    };

    comments.push(newCommentData);
    sessionStorage.clear();
    let commentSpace = displayComment(newCommentData);
    userCommentCtn.prepend(commentSpace);

    event.target.reset();
});

