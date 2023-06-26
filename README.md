## Web Components Library Documentation

### Introduction

The Web Components Library is a collection of reusable components that can be used to build web applications. These components are built using web standards and follow the Web Components specifications, allowing them to work seamlessly across different frameworks and environments. In this documentation, we will explore the benefits of using web components and provide details on the `intro-container` component.

### Why Use Web Components?

Web components offer several advantages over traditional approaches to building UI components. Here are some reasons why it's better to use web components:

1. **Framework Agnostic**: Web components are framework-agnostic, meaning they can be used with any JavaScript framework (such as React, Angular, Vue, etc.) or even without a framework. This flexibility allows developers to adopt web components without being tied to a specific framework or technology stack.

2. **Reusability**: Web components promote component reusability, as they can be easily shared and consumed across different projects and teams. Once created, a web component can be reused in various applications, saving development time and effort.

3. **Isolation**: Web components are encapsulated, ensuring that their styles, behavior, and markup do not interfere with other parts of the application. This isolation helps prevent CSS and JavaScript conflicts and improves the maintainability of the codebase.

4. **Browser Compatibility**: Web components work natively in modern browsers without the need for additional polyfills or dependencies. They leverage the capabilities of the browser's rendering engine, making them highly performant.


### Installation

To use the `intro-web-components` package, follow these steps to install it in your project:

1. Open your terminal or command prompt.

2. Navigate to your project directory.

3. Run the following command to install the package via npm:
`npm install intro-web-components`


### `intro-container` Component

The `intro-container` component is a container component designed to facilitate one-time component renders. It acts as a container for children components and helps render a specific component only once, which is useful for scenarios like onboarding. This component utilizes the `localStorage` API for achieving this behavior.

#### Attributes

- `context` (string): This attribute allows you to specify a context for the `intro-container` component. It helps when you need to use this container in multiple places with different contexts.

#### Usage Examples

##### React

```jsx
import React from 'react';
import 'intro-web-components'; // Import the intro-web-components package

const IntroContainer = () => {/
  return (
    <div>
      {/* Your other React components */}
      <intro-container context="myContext">
        {/* Children components */}
        <child-component-1 />
        <child-component-2 />
        {/* ... */}
      </intro-container>
      {/* Your other React components */}
    </div>
  );
};

export default IntroContainer;
```

##### Angular
```jsx
<!-- app.component.html -->
<div>
  <!-- Your other Angular components -->
  <intro-container context="myContext">
    <!-- Children components -->
    <child-component-1></child-component-1>
    <child-component-2></child-component-2>
    <!-- ... -->
  </intro-container>
  <!-- Your other Angular components -->
</div>
```

##### Native Web Development
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Include the necessary scripts -->
  <script src="path/to/web-components.js"></script>
</head>
<body>
  <!-- Your other HTML content -->
  <intro-container context="myContext">
    <!-- Children components -->
    <child-component-1></child-component-1>
    <child-component-2></child-component-2>
    <!-- ... -->
  </intro-container>
  <!-- Your other HTML content -->
</body>
</html>
```


### Exploring with Storybook

The repository for the `intro-web-components` package includes Storybook, a development environment for UI components. You can use Storybook to explore the available web components, view their different states, and interact with them in an isolated environment. To get started with Storybook, follow these steps:

1. Ensure that you have the `intro-web-components` package installed in your project.

2. Open your terminal or command prompt.

3. Navigate to the root directory of the `intro-web-components` project.

4. Run the following command to start the Storybook server:
`npm run storybook`

5. Once the server starts, you can access the Storybook interface in your browser at the provided URL (e.g., http://localhost:6006).

6. Explore the available components, their documentation, and interact with them to understand their functionality and usage.

Storybook provides a convenient way to visualize and experiment with the web components provided by the `intro-web-components` package.
