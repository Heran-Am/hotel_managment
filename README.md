This is a Hotel Management Project in  [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# ** Features: ** 
- search and view a room type.
- choose a light or dark mode.
- see the price of a room selected.
- make a discount based on the days.


The Graphical User Interface FOR this project Hotel management system !

## 1. Git 

My experience on GitHub as a beginner has been enriching. Through exploration and experimentation, I've delved into the world of version control, discovering the power of collaborative development. With each commit, push, and pull request, I've gained invaluable insights and honed my skills. As I continue this journey, I look forward to further growth and contribution within the vibrant GitHub community.

## 2. UML
I have use three diagrams for this project and those diagrams are,
- [Class diagram](UML/Class%20diagram.png)
- [Sequence diagram](UML/Sequence%20Diagram.jpg)
- [Usecase diagram](UML/Usecase%20diagram.png)

 ## 3. DDD
In my project, I embraced Domain-Driven Design (DDD) because it emphasizes understanding the core domain, setting clear boundaries, and fostering collaboration through shared language.

To kicked off the project, I organized a brainstorming session [brainstorming session](DDD/brainstorming.png) where we outlined our goals and features collaboratively. Techniques like mind mapping helped us generate ideas and prioritize requirements, laying the groundwork for our development plan.

  Next, I dived deep into understanding key domain concepts, aiming for clarity and insight. This informed better decision-making as we moved forward.

With a solid grasp of domain ideas [DDD](DDD/domainideas.png), I focused on developing a 'ubiquitous language' [ubiquitous language](DDD/domainUbiquitious%20language.png) shared vocabulary for smooth communication and understanding among team members.

To visualize our project's structure, I created a context map [context map](DDD/content%20mapping.png), outlining key content and its relationships. This served as a visual roadmap for our development journey.

Finally, I distilled our core domain into a chart, providing a clear overview of its components and interactions. [Core domain](DDD/core%20domain.png)

## 4.Metrics
These are the metrics listed below :


Quality Gate Status(Passed):[Status](https://sonarcloud.io/summary/new_code?id=Heran-Am_hotel_managment)
Maintainability(0 Code Smells): Maintainability Rating
Duplications(Duplicated Lines (%)0.0%):Duplications
Security (0 Vulnerabilities)(A):Review
Security Review(0 Security Hotspots)(A): Review
Reliability Rating(0 Bugs)(A): Rating

![Screenshot 2024-03-30 170410](https://github.com/Heran-Am/hotel_managment/assets/149790376/a6ac2640-87f0-47a0-9f28-0af40b33c3a6)

![passed](https://github.com/Heran-Am/hotel_managment/assets/149790376/abf383c3-e54d-414f-9919-53d43d1c280b)




## 5. Clean Code Development
Clean code Developement Cheatsheet is here and example from the code.

Comments/Doctstrings : Use Docstrings or comments to explain the function/methods. Docstrings


DRY (Don't Repeat Yourself): Reusable functions, modules, or libraries can help prevent code duplication. In sonarcloud metrics, we can see no duplication Duplicated Lines 

## 6. and 7. Build and CI/CD


I've set up GitHub Actions for my project to automate building and testing. Although tools like Ant, Maven, and Gradle are more common for Java projects, I found GitHub Actions suited my needs better.

Here's how it works:

Build: The pipeline compiles code, prepares assets, and creates deployment files.

Test: Unit and integration tests ensure the code's quality and reliability. It took a lot of effort, but I persevered until the tests passed.

GitHub Actions streamlines Continuous Integration and Deployment (CI/CD) directly from my repository. I configure the process using a YAML file called a workflow file located in the .github/workflows directory.


## 8. UnitTest

I have imported a unit test module for unit testing. I have written three unit tests based the function of this code is to perform unit testing on a React component called Footer. Unit testing is a software testing technique where individual units or components of a software are tested in isolation to ensure they behave as expected.
Imports: It imports necessary functions and components required for testing. In this case, it imports the render function from the @testing-library/react library, which is used to render React components for testing purposes, and 
1, imports the Footer component that is to be tested.

2, Test Definition: It defines a test case using the test function provided by the testing library. The test case is named 'footer renders correctly with contact information and links'.

3, Rendering: Within the test case, it renders the Footer component using the render function. This simulates how the component would be rendered in a real application.


## 9. IDE

I've opted for Visual Studio as my IDE for this project for several reasons. It offers a rich set of features and tools essential for software development, such as code editing, debugging, testing, and version control integration. Visual Studio supports various programming languages, frameworks, and platforms, making it versatile and suitable for diverse projects.

Here are some of my favorite shortcuts in Visual Studio:

1.Ctrl + D: Duplicate line or selection.
2.Ctrl + /: Toggle line comment.
3.Ctrl + Shift + L: Select all occurrences of the current selection.
4.Ctrl + Shift + K: Delete line.
5.Ctrl + Shift + P: Open command palette.
6.Ctrl + Shift + F: Search across files.
7.Ctrl + Shift + O: Go to symbol (methods, classes, etc.).
8.Ctrl + F5: Run without debugging.
9.Ctrl + F9: Toggle breakpoint.
10.Ctrl + Shift + V: Open Markdown preview.
These shortcuts help streamline my coding workflow and boost productivity in Visual Studio.

## 10.DSL
defines data structures that are crucial for managing hotel rooms and bookings in the systemand it to management to:

1. Room Management:

The Room type acts as a template for storing and representing information about each hotel room in your system.
By using this type, I ensured consistency in how room data is stored across databases, APIs, and components.
It defines the expected properties for a room, allowing to easily add, update, and retrieve room information in a structured manner.
2. Booking Management:

The CreateBookingDto type helps manage the creation of new bookings.
It specifies the essential details required for a booking, including the user, room, dates, and pricing information.
This type ensures that all relevant booking data is collected from the user and sent to the backend for processing.
It acts as a standardized format for booking data, facilitating validation and interaction with a booking management system.

## 11.Functional Programming

This Functional Programming defines several functionalities for managing hotel room availability based on a Domain Specific Language (DSL) configuration file. 

1. Loading Configuration:

loadHotelConfig Function:
Takes a file path (filePath) as input.
Reads the contents of the file at the specified path using readFileSync. It assumes the file contains the DSL string defining hotel configuration.
Passes the read DSL string to the HotelzzzConfig function (not shown in the provided code) for parsing.
Returns an object containing parsed data about rooms and their availability.

2. Checking Availability:

checkAvailability Function:
Takes an array of rooms, an array of availability entries (parsed from the DSL), a checkinDate, and a checkoutDate as input.
Initializes an empty availableRooms array to store information about available rooms.
Iterates through each room in the rooms array.
Finds the corresponding AvailabilityEntry from the availability array that matches the room's ID.
If no AvailabilityEntry is found for a room, it assumes the room is available (customizable behavior).













  





