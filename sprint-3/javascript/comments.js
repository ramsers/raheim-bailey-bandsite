let apiKey= "7424395f-e2a4-4e35-b456-c800d11c2d63";



// Comments Section Javascript 
// Select Relevant Sections
let commentSection = document.querySelector(".comments");

let commentField = document.querySelector(".comments__ctn");

let userCommentCtn = document.querySelector(".user__comments-ctn")

let nameField = document.querySelector(".comments__name");

let userComment = document.querySelector(".comments__field");

let submitBtn  = document.querySelector(".comments__btn");


// Comments Array

// console.log(images);

let getPromise = () => {
 return  axios.get('https://project-1-api.herokuapp.com/comments?api_key=7424395f-e2a4-4e35-b456-c800d11c2d63')
.then(response => {

    let usersData = JSON.stringify(response.data);

    let newUsersData = JSON.parse(usersData);

    newUsersData.forEach((item) => {
        let commentSpace = displayComment(item);
        userCommentCtn.prepend(commentSpace);
    }) 
})
.catch(error => {
    alert("you didnt get the data", error);
})
}

getPromise();






// Select and Create individual container for form elements to allow for easy flex application
let commentForm = document.querySelector(".comments__form");

let formImageCtn = document.createElement("div");
formImageCtn.classList.add("img-ctn");
let formImage = document.createElement("img");
formImage.classList.add("user-image");
formImage.src = "././assets/images/Mohan-muruge.jpg"
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



commentForm.addEventListener('submit', e => {
    e.preventDefault();
    let userSpace = document.querySelector(".user__comments-ctn");
    userSpace.innerHTML = "";
    // Define an array with image fil paths
    let ranUserImg = ['./assets/images/puppy-3.jpg', './assets/images/puppy-4.jpg',
    './assets/images/puppy-5.jpg', './assets/images/cat-1.jpg', './assets/images/cat-2.jpg',
    './assets/images/cat-3.jpg'    
    ];
    // write a function that takes the image array and runs Math.'' to select a random image
    // Function will return the image
    ranImg = (imgArr) => {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
    
    let newUser = e.target.userName.value;
    let newComment = e.target.userVoice.value;
    let userImage =ranImg(ranUserImg);

    axios
    .post('https://project-1-api.herokuapp.com/comments?api_key=7424395f-e2a4-4e35-b456-c800d11c2d63',{
            "name": newUser,
            "comment": newComment,
            // "image": userImage
            })
            
            .then(result => {
                
                let newCommentData = result.data;

                
                
                let commentSpace = displayComment(newCommentData);
                userCommentCtn.prepend(commentSpace);
            })
            event.target.reset();
            getPromise();    
        });


// Generate Comments HTML
let displayComment = (newUsersData) => {

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

    userName.innerText = newUsersData.name;
    userName.classList.add("users__name");
    commentInfoCtn.appendChild(userName);
    commentSpace.appendChild(commentInfoCtn);

    let timestamp = newUsersData.timestamp;
    let dateObj = new Date (timestamp);
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();

    userTime.innerText = `${month}/${date}/${year}`;
    userTime.classList.add("users__time");
    commentInfoCtn.appendChild(userTime);
    commentSpace.appendChild(commentInfoCtn);
    
    userComment.innerText = newUsersData.comment;
    userComment.classList.add("users__comment");
    commentInfoCtn.appendChild(userComment);
    commentSpace.appendChild(commentInfoCtn);


    const images = [
        '././assets/images/spirit-animal-1.jpg'
       ,  
        '././assets/images/puppy-2.jpg'   
       ,
        '././assets/images/puppy-1.jpg'
   ];

   for(let i = 1; i < images.length; i++) {
    userImage.src = images[i++];
    userImage.classList.add("user-image");
    imageCtn.classList.add("img-ctn");
    imageCtn.appendChild(userImage);
    commentSpace.appendChild(imageCtn);
   }

    return commentSpace;
}