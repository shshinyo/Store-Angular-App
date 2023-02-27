 # Store Angular App

<table>
<tr>
<td>
  <a href="https://www.stc.com.sa/content/stc/sa/ar/personal/home.html">
    <img src="https://dl.memuplay.com/new_market/img/com.stc.icon.2023-02-08-21-55-24.png" align="right"
    width="140" height="140">
  </a>

it's a repo designed to create a **Web Store Application with Angular 15**


* Frontend - [**Angular 15.2.0**](https://github.com/angular/angular/releases) & [**Angular CLI 15.2.0**](https://github.com/angular/angular-cli/releases/)

* UI prototype - [**tailwind css 3.2.6**](https://www.npmjs.com/package/tailwindcss) 


*  Test the repo with [**Quick start**](#quick-start) and for more information Read the step by step [**Documentation**](#Documentation) 


</td>
</tr>
</table>
## Table of contents

- [Quick start](#quick-start)
- [Front-end](#front-end)
- [Author](#author)

### Front-end : What's included
> Dependencies
- [x] Angular : 15.1.5
- [x] Angular CLI : 15.2.0
- [x] tailwind : 3.2.6
- [x] Ngrx : 15.3.0
- [x] Rxjs : 7.5.0
- [x] @angular/forms : 15.0.0
- [x] @angular/material : 15.1.4


> Features
- [x] Routing
- [x] Lazy Loading
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Components
- [x] Services
- [x] Reactive Form
- [x] Template Driven Forms
- [x] Search / Grid / Pagination

## Quick start

```bash
# select a repo from github or gitlab

# download the example or clone the repo from github
git clone https://github.com/shshinyo/Store-Angular-App.git

# change directory
cd angular-app

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 


## Front-end

### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developement
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

## Linter
* `npm run lint`

## Tests
* `npm run test`

### Compilation
* `npm run build`      


## Documentation

- Authentication - Basic login form and use static login users for the 2 roles:

  - User => `User Name : user , Password : user `
  - Admin => `User Name : admin , Password : admin `

- Security should be applied to the page to restrict only logged in users who can access it.
  This display will appear depending on the user role as follows:

  - #Admin View

    - Should display all products in a table (Bonus: use pagination with the data)
    - Can add product
    - Can update product
    - Can delete product

  - #User View

    - Show the different categories and under each category show the available products and filters section. (Bonus: use loading while getting the data - changing the products list with animation)
    - For each product card user should see the full data

### Author
* Author  : ibrahem mohamed

