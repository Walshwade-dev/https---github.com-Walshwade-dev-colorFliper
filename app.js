const flip = document.querySelector('.btn--flip');

function toggle(){
    //change colors randomly given an array of colors
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    
    function getRandomColor(arr){
        //first: get the random index
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random color
        const item = arr[randomIndex];

        return item;
    }

    const marangi = getRandomColor(colors);
    console.log(marangi);


    let element = document.querySelector('#color');
    element.innerHTML = marangi;

    let simple = document.getElementById('simple');
    simple.style.color = marangi;


    document.querySelector(".main").style.backgroundColor = marangi;
}

flip.addEventListener("click", toggle, false);


