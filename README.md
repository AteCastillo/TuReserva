---


---

<h1 id="tureserva">TuReserva</h1>
<p><img src="https://i.imgur.com/hWqCHlX.png" alt="logo"></p>
<h2 id="the-project">The project</h2>
<p>TuReserva is a web app created to group services all in one place so people can book what they need when they need it.</p>
<h3 id="the-context">The context</h3>
<p>This project is the last step to graduate a 9 month software development program/Foundations at Holberton School in Montevideo, Uruguay. We decided freely who to work with (up to three members) and what to develop. This project was divided in two parts, the first one, to research and define the portfolio project  proposal over the course of 3 weeks, the second one, the building process done in two weeks.</p>
<h3 id="the-team">The team</h3>
<p><a href="https://github.com/MatiasAcosta567">Matias Acosta</a> - Software engineer passionate about back-end and blockchain. He is the project’s architect; in charge of the API endpoints, data modeling and performance.<br>
<a href="https://github.com/parbilla">Pedro Arbilla</a> - Economist, actor and software developer. He feels very comfortable dealing with logic and is the mathematician of the team, so he provided the best support to both front-end and back-end.<br>
<a href="https://github.com/AteCastillo">Atenea Castillo</a> - Economist, historian, globetrotter and software developer. She is the front-end leader, focusing in accessibility, interactive elements and user-interface.</p>
<h3 id="features">Features</h3>
<ul>
<li>Users can login and book services among the different categories and<br>
partners available.</li>
<li>Service providers can integrate and offer different products to be booked.</li>
<li>Services are described, priced and their duration established.</li>
<li>Users and partners have their own wallet.</li>
<li>Users and partners can make reviews for every interaction.</li>
</ul>
<h3 id="blogs">Blogs</h3>
<h2 id="take-a-tour">Take a tour</h2>
<p>User experience<br>
<img src="https://i.imgur.com/XFcoeBa.png" alt="Diagram"></p>
<h2 id="architecture">Architecture</h2>
<p>Project architecture shows an end to end map (client - server) with the data flow for the system and shows interactions between application components.</p>
<p><img src="https://i.imgur.com/iUIuRVC.png" alt="architecture"></p>
<h3 id="back-end">Back-end</h3>
<p>The project was developed locally. Given that it is an MVP, we decided to focus on the functionalities of the API, and once we have the project well oiled, think  to  put it into operation remotely in the near future. The API was programmed in Python, and we used the Flask framework to connect the data to the dynamic web, and the MySQLdb interface for connecting to the MySQL database.</p>
<h3 id="front-end">Front-end</h3>
<h4 id="react-js">React Js</h4>
<p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.</p>
<h5 id="components">Components</h5>

<table>
<thead>
<tr>
<th>Components</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Main</td>
<td>Landing page everybody sees when entering the app</td>
</tr>
<tr>
<td>Navbar</td>
<td>Navigation bar that appears in every other component. It has: logo, login, sign up, logout and search buttom.</td>
</tr>
<tr>
<td>Footer</td>
<td>Foot bar that appears in every other component.</td>
</tr>
<tr>
<td>Forms</td>
<td>Component that contains all forms for sign up, login and adding services and images.</td>
</tr>
<tr>
<td>Categories</td>
<td>Contains the set of categories presented in Main page.</td>
</tr>
<tr>
<td>Order</td>
<td>Component for users to place orders.</td>
</tr>
<tr>
<td>Partners</td>
<td>Component shown after a user selects a category and a company, here she can see every service provided by an specific partner.</td>
</tr>
</tbody>
</table><blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

