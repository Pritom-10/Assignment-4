                  My Honest Answers

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

==> getElementById()-- a.Fastest method; b. return type(single element); c.Only used id.

==> getElementsByClassName()-- a.Return to Live HTML Collection; b. Automatically update when Dom Changed; c. Only used class.

==> querySelector()-- a.Supports to css selector; b.class,id,tag etc used; c.Return first match.


2.  How do you create and insert a new element into the DOM?

==> 1st work-- document.createElement()-->create element.
==> 2nd work-- element.textContent / innerHTML-->contet add.
==> 3rd work-- parent.appendChild() / append()-->DOM e insert.

Example-->
const creates = document.createElement('div');
creates.innerHTML= ` <p>Computer Science & Engineering</p>`
const contain = document.getElementById("div");
contain.appendChild(contain);

3.  What is Event Bubbling? And how does it work?

==> Event Bubbling is a process where an event starts from the target element and then propagates (moves) upward to its parent elements in the DOM tree.

==> Works step--> supposed click a button--1.button(target); 2.Moves to the parent div; 3.Then to body;
4.Then to html; 5.Finally to document.

4. What is Event Delegation in JavaScript? Why is it useful?

==> Event Delegation is a JavaScript technique where a single event listener is attached to a parent element to manage events for its child elements using event bubbling.

==> Why useful--
a.Better Performance
b.Better Performance
c.Uses Event Bubbling
d.Works with Dynamic Elements

5.  What is the difference between preventDefault() and stopPropagation() methods?

==> preventDefault()-- a.Stops the browser’s default behavior; b.link navigation; c.Page reload.

==> stopPropagation()-- a.Event bubbling; b.Parent event listeners; c.Stops the event from bubbling to parent elements.