// Function to navigate to the selected page
function navigateToPage(page) {
  const pages = ['home', 'about', 'products', 'contact'];
  if (pages.includes(page)) {
    // Navigate to the respective HTML pages with the correct filenames
    const filename = (page === 'home') ? 'index' : page;
    window.location.href = `${filename}.html`;
  }
}

// Function to create and style the header
function createHeader() {
  const headerElement = document.createElement('header');
  const h1Element = document.createElement('h1');
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');

  // Set content for the h1 element
  h1Element.textContent = 'Nike Waffle-Sole Running Shoes';

  // Set content for the navigation links
  const links = ['Home', 'About', 'Products', 'Contact'];
  links.forEach(linkText => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.textContent = linkText;
    aElement.setAttribute('href', '#' + linkText.toLowerCase());
    aElement.addEventListener('click', function(event) {
      event.preventDefault();
      navigateToPage(linkText.toLowerCase());
    });
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  // Append elements to the header
  navElement.appendChild(ulElement);
  headerElement.appendChild(h1Element);
  headerElement.appendChild(navElement);

  // Add styles to the header
  headerElement.style.backgroundColor = '#333';
  headerElement.style.color = '#fff';
  headerElement.style.padding = '1em';

  // Add styles to the h1 element
  h1Element.style.fontSize = '2.5em';
  h1Element.style.fontWeight = 'bold';
  h1Element.style.marginBottom = '1em';
  h1Element.style.textAlign = 'center';

  // Add styles to the navigation links
  navElement.style.textAlign = 'right';

  const navList = navElement.querySelector('ul');
  navList.style.listStyle = 'none';
  navList.style.padding = '0';
  navList.style.margin = '1em 0';

  const navItems = navList.querySelectorAll('li');
  navItems.forEach(item => {
    item.style.display = 'inline';
    item.style.marginRight = '1em';
  });

  navItems[navItems.length - 1].style.marginRight = '0'; // Remove margin for the last link
  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.style.textDecoration = 'none';
    link.style.color = '#fff';
    link.style.fontSize = '1.2em';
    link.style.cursor = 'pointer'; // Change cursor to indicate clickable links
  });

  // Append the header to the document body
  document.body.insertBefore(headerElement, document.body.firstChild);
}

// Function to create and style the footer
function createFooter() {
  const footerElement = document.createElement('footer');
  const pElement = document.createElement('p');

  // Set content for the footer
  pElement.textContent = '\u00A9 2023 Nike Waffle-Sole Running Shoes. All rights reserved.';

  // Append the paragraph to the footer
  footerElement.appendChild(pElement);

  // Add styles to the footer
  footerElement.style.backgroundColor = '#333';
  footerElement.style.color = '#fff';
  footerElement.style.padding = '1em';
  footerElement.style.position = 'inherit';
  footerElement.style.bottom = '0';
  footerElement.style.width = '100%';

  // Append the footer to the document body
  document.body.appendChild(footerElement);
}

// Call the functions to create and style the header and footer
createHeader();
createFooter();












/////////////////////////////////////////////////////////////////////////////////
// Function to create and style the header for the Product page
function createProductHeader() {
  const headerElement = document.createElement('header');
  const h1Element = document.createElement('h1');
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');

  // Set content for the h1 element
  h1Element.textContent = 'Nike Products';


  // Set content for the navigation links
  const links = ['Home', 'About', 'Products', 'Contact'];
  links.forEach(linkText => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.textContent = linkText;
    aElement.setAttribute('href', '#' + linkText.toLowerCase());
    if (linkText === 'Home') {
      aElement.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('index.html');
      });
    } else {
      aElement.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage(linkText.toLowerCase() + '.html');
      });
    }
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  // Append elements to the header
  navElement.appendChild(ulElement);
  headerElement.appendChild(h1Element);
  headerElement.appendChild(navElement);

  

  // Append the header to the document
  const productHeader = document.getElementById('productHeader');
  if (productHeader) {
    productHeader.appendChild(headerElement);
  }
}

// Function to create and style the footer for the Product page
function createProductFooter() {
  const footerElement = document.createElement('footer');
  const pElement = document.createElement('p');

  

  // Append the paragraph to the footer
  footerElement.appendChild(pElement);

  

  // Append the footer to the document
  const productFooter = document.getElementById('productFooter');
  if (productFooter) {
    productFooter.appendChild(footerElement);
  }
}

// Function to navigate to the selected page
createProductHeader();
createProductFooter();





