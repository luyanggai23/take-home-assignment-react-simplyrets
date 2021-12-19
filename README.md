# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions
- Used styled-components for styling because I like to separate functionality of components vs styling of them. Leads to better re-usability in larger applications. Less important in a smaller app like this one.
- Split out /components /pages /services and /utilities for organizational purposes.
- Did not have time to handle styling support for mobile.
- Did not have time to add as many unit tests as I would've liked. I would've leveraged react-testing-library to test services / utilities and components. Would prioritize this normally but with time limit I felt I needed to make sure to get somewhat working solution first.
- Tried to tamper with using a hooks library for localStorage but had issues so reverted to talking to localStorage directly.
<!-- Please document your code & design decisions here. -->
