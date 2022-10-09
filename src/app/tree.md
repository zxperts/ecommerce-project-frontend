cd .\extract-text-from-pdf-js-main\
node .\index.js
node .index.js
node index.js
----
ng new angular-ecommerce
ng generate component components/product-list
ng serve --open

ng generate component components/product
ng generate class components/product
ng generate service  services/product


npm install bootstrap
npm install @fortawesome/fontawesome-free


ng generate class common/product-category
ng generate component components/product-category-menu
ng generate component components/search
ng generate component components/ProductDetails


ng add @angular/localize
npm install @ng-bootstrap/ng-bootstrap

ng generate component components/cart-status
npm cache clear --force
ng generate class common/cart-item
ng generate service services/cart


C:.
|   app.component.css
|   app.component.html : page HTML accueillant l'application Angular.
|   app.component.spec.ts : Unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file
|   app.component.ts : Main class file for any component app.component.html
|   app.module.ts :  concepte pour mieux structurer le code et faciliter la réutilisation et le partage. Regrouper des composants (mais aussi des services, directives, pipes etc...), définir leurs épendances, et définir leur visibilité.
|   tree.txt
|   
+---common
|       cart-item.spec.ts
|       cart-item.ts
|       product-category.spec.ts
|       product-category.ts
|       
+---components
|   |   product.spec.ts
|   |   product.ts
|   |   
|   +---cart-status
|   |       cart-status.component.css
|   |       cart-status.component.html
|   |       cart-status.component.spec.ts
|   |       cart-status.component.ts
|   |       
|   +---product-category-menu
|   |       product-category-menu.component.css
|   |       product-category-menu.component.html
|   |       product-category-menu.component.spec.ts
|   |       product-category-menu.component.ts
|   |       
|   +---product-details
|   |       product-details.component.css
|   |       product-details.component.html
|   |       product-details.component.spec.ts
|   |       product-details.component.ts
|   |       
|   +---product-list
|   |       product-list-grid.component.html
|   |       product-list-table.component.ts
|   |       product-list.component.css
|   |       product-list.component.html
|   |       product-list.component.spec.ts
|   |       product-list.component.ts
|   |       
|   \---search
|           search.component.css
|           search.component.html
|           search.component.spec.ts
|           search.component.ts
|           
\---services
        cart.service.spec.ts
        cart.service.ts
        product.service.spec.ts
        product.service.ts
        
