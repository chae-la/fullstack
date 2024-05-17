# Skincare Database

### Language(s) Used

1. React: 18.2.0
2. Java: v17

### Dev Dependencies

1. SASS: 1.71.1
2. Vite: 5.1.4
3. Typescript: 5.2.2
4. React: 18.2.0
5. React-Router-Dom: 6.23.1
6. React-Dom: 18.2.0
7. MySQL

## Table of Contnets

- [Introduction](#introduction)
- [Database Preview](#database-preview)
- [Code Snippet](#code-snippet)
- [Setup](#setup)

## Introduction

Keeping and maintaining a spreadsheet of skincare I've used over the years is tiring and does'nt look good. However, spending time into creating a project that displays the products that I have used, including aditional information like key ingredients to quickly identify what the product does; integrates what I have learned about front-end and back-end into one project.


## Database Preview

![An image of the webpage]()

## Features

- Able to change between pages
- Add Products into the database in the "Add A Product" page
- View all the products
- Edit and update the product and database when you click on that card
- Deleted a product


## Code Snippet

```
@GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String brandName){
        if(brandName != null){
            return ResponseEntity.status(HttpStatus.OK).body(productsService.getProductsByBrandName(brandName));
        }
        return ResponseEntity.status(HttpStatus.OK).body(productsService.getAllProducts(brandName));
    }
```
Code to view the products by order of Brand Name. Checks for Null and returns a Response Entity HTTP Status code. 

## Setup
a. Java done in Intellij

b. React done in VsCode



1. Clone this repository to your local machine.
2. Run "npm install" to download dependencies.
3. Navigate to the "src" folder to find the Typescript, if changes are desired.
4. Open a new terminal and type "npm run dev".
