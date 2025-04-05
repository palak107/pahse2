A responsive Amzon clone built with React , featuring core e-commerce functionality

1.Routing and Navigation
There are diffent types of route :
1. Dynamic Routing
Used for handling product searches and parameter-based navigation:

When users search for items in the navbar, they're redirected to a dynamic results page

Example URL pattern: /search/:query

Implementation:

javascript
Copy
// Navbar search handler
const searchHandler = () => {
  router.push(`/search/${encodeURIComponent(query)}`);
}
2.Link
Used for main category navigation:

Categories: Electronics, Kitchen, Baby, Orders, Gifts, Fresh

Seamless client-side transitions without page reload

Implementation:

jsx
Copy
<Link href="/electronics">
  <a>Electronics</a>
</Link>
3.Protected Navigation 
used for checkin and chkeout

State Managment
1Gloabal state managment
Redux : REdux tool kit is used for maanginig the basket for example managing the product quantity as you can add item and delete item and it is also used for displaying the quantity in the cart and displaying the total of the items.
2 Local state managment
useState hook : it is used to manage the searchQuery state variable this bascially tracks the input state.
useState : it is used to manage the Product card component also it manage the isHovered and quickViewopen stata to handle hover effect and popus.



AddressContext maintains and synchronizes delivery location across components (like the navbar and checkout page), while the DeliveryContext manages shipping options including Prime availability and location-based delivery methods. This hybrid approach optimizes performance by keeping localized states independent while ensuring necessary global data remains accessible
The architecture deliberately uses Redux for complex business logic (cart operations), Context for cross-component settings (location), and useState for isolated UI states, creating a balanced and maintainable state ecosystem.