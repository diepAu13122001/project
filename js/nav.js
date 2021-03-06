const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
             <div class="nav">
             <a href="index.html"> <img src="img/dark-logo.png" class="brand-logo" alt=""> </a>
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn"> search</button>
                    </div>
                    <a>
                        <img src="img/user.png" id="user-img" alt="">
                        <div class="login-logout-popup hide">
                            <p class="account-info">Log in as, name</p>
                            <button class="btn" id="user-btn">Log out</button>
                        </div>
                        </a>
                    <a href="cart.html"><img src="img/cart.png" alt=""></a>
                </div>
           </div>
            <ul class="links-container">
                <li class="link-item"><a href="index.html" class="link">Home</a></li>
                <li class="link-item"><a href="honda.html" class="link">Honda</a></li>
                <li class="link-item"><a href="suzuki.html" class="link">Suzuki</a></li>
                <li class="link-item"><a href="yamaha.html" class="link">Yamaha</a></li>
                <li class="link-item"><a href="aboutUs.html" class="link">About Us</a></li>
            </ul>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const logoAction = document.querySelector('.brand-logo');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

actionBtn.addEventListener('click', () => {
    popuptext.innerHTML = 'Log in to place order';
    actionBtn.innerHTML = 'Log in';
    actionBtn.addEventListener('click', () => {
        location.href = 'login.html';
    })
})


searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = 'search.html';
    }
    else{
        location.href = '404.html';
    }
})

logoAction.addEventListener('click', () => {
    location.href = 'index.html';
})