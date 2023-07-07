const body = document.createElement('body');
const footer = document.createElement('footer');
const footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'footer-container');


const linkProducts = document.createElement('div');
linkProducts.setAttribute('class', 'footer-link-products');
const productsList = document.createElement('ul');
productsList.innerHTML = `
    <li><h5 class="li-title-text">PRODUCTS</h5></li>
    <li><a href="">Heroku Platform</a></li>
    <li><a href="">Heroku Data Services</a></li>
    <li><a href="">Heroku Postgres</a></li>
    <li><a href="">Heroku Data for Redis</a></li>
    <li><a href="">Apache Kafka on Heroku</a></li>
    <li><a href="">Heroku Enterprise</a></li>
    <li><a href="">Heroku Private Spaces</a></li>
    <li><a href="">Heroku Connect</a></li>
    <li><a href="">Heroku Shield</a></li>
    <li><a href="">Heroku Teams</a></li>
    <li><a href="">Elements Marketplace</a></li>
    <li><a href="">Pricing</a></li>
    `;
linkProducts.append(productsList);


const linkResources = document.createElement('div');
linkResources.setAttribute('class', 'footer-link-resources');
const resourcesList = document.createElement('ul');
resourcesList.innerHTML = `
    <li><h5 class="li-title-text">RESOURCES</h5></li>
    <li><a href="">Documentation</a></li>
    <li><a href="">Compliance Center</a></li>
    <li><a href="">Training & Education</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Podcasts</a></li>
    <li><a href="">Get Started</a></li>
    `;
linkResources.append(resourcesList);

const linkAbout = document.createElement('div');
linkAbout.setAttribute('class', 'footer-link-about');
const aboutList = document.createElement('ul');
aboutList.innerHTML = `
    <li><h5 class="li-title-text">ABOUT</h5></li>
    <li><a href="">About Us</a></li>
    <li><a href="">What is Heroku</a></li>
    <li><a href="">Heroku & Salesforce</a></li>
    <li><a href="">Our Customers</a></li>
    <li><a href="">Careers</a></li>
    <li><a href="">Partners</a></li>
    <li><a href="">Elements Marketplace</a></li>
    `;
linkAbout.append(aboutList);


const linkSupport = document.createElement('div');
linkSupport.setAttribute('class', 'footer-link-support');
const supportList = document.createElement('ul');
supportList.innerHTML = `
    <li><h5 class="li-title-text">SUPPORT</h5></li>
    <li><a href="">Help Center</a></li>
    <li><a href="">Status</a></li>
    <li><a href="">Premium Support</a></li>
    <li><a href="">Contact Us</a></li>
    `;
linkSupport.append(supportList);


const inputIcon = document.createElement('div');
inputIcon.setAttribute('class', 'footer-input-icon');
inputIcon.innerHTML = `
    <div class="icon-paragraph">
        <img src="./img/img.footer-icons/footer.svg" alt="">
        <p>Subscribe to our monthly newsletter</p>
    </div>
    <p class="mail-addres">Your email address: </p>
    <div class="inp-btn">
        <input type="text">
        <button>GO</button>
    </div>
    <div class="footer-line"></div>
    <div class="footer-link-icons">
        <a href=""><img src="./img/img.footer-icons/foot-ic1.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic2.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic3.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic4.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic5.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic6.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic7.svg" alt=""></a>
        <a href=""><img src="./img/img.footer-icons/foot-ic8.svg" alt=""></a>
    </div>
    `;

footerContainer.append(linkProducts);
footerContainer.append(linkResources);
footerContainer.append(linkAbout);
footerContainer.append(linkSupport);
footerContainer.append(inputIcon);
footer.append(footerContainer);

body.append(footer);
