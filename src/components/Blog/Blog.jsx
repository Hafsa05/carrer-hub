import React from 'react';
const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-semibold mb-16 mt-8'>Que & Ans</h2>
            <div className='text-left'>
                <h3 className='text-2xl mb-4'>1. When should I use Context API?</h3>
                <p className='text-xl mb-8'>
                    When data has to be shared across components that are not directly related via the parent-child connection, React's Context API should be utilized. It gives you an alternative to manually passing props down at each level when passing data via the component tree. <br />
                    Context API may be useful in the following situations: <br />
                    i. User Authentication: You may use context to transfer the user's authentication status and relevant data around your app if you need to handle the user's authentication status across various portions of your app. <br />
                    ii. Theme Switching: The Context API may be used to give the current theme across your app, allowing users to choose between bright and dark themes. <br />
                    iii. Component hierarchies: If component tree is deep and complicated, utilizing the Context API can make providing data as props to every child component easier. <br />
                    iv. Multilingual Application Handelling: The Context API can be used to provide the current language to all of components in an application that supports multiple languages. <br />
                    In summary, Context API is helpful to avoid prop-drilling and improve the maintainability and flexibility for a system. It is essential to remember, however, the misusing of Context API might result in a complicated and difficult to the  system. Thats why use it when it makes sense for the specific use cases.
                </p>
                <h3 className='text-2xl mb-4'>2. What is Custom Hook of react?</h3>
                <p className='text-xl mb-8'>
                    The custom hook in React is a function that utilizes React hooks such as useState, useEffect, useContext, and so on. It add special functionality to an application. Custom hooks enable you to reuse stateful functionality across many components, making your code more modular and maintainable. Again, it is a JavaScript function that starts with the word "use" and allows you to reuse stateful functionality between components. Custom hooks are used to encapsulate reusable code so that it may be easily reused across many React components. <br />
                    Custom hooks allow you to extract and reuse functionality from many components. They are particularly handy for abstracting away difficult or repetitive code as well as for separating issues in your program. A custom hook might be used to control the state of a form, get data from an API, or handle user authentication. Most common use cases for custom hooks are to abstract logic from a complex state of an application. We can also use it to reuse our code and to improve in quality testing part. <br />

                </p>
                <h3 className='text-2xl mb-4'>
                    3. What is useRef and what is it's uses in React?
                </h3>
                <p className='text-xl mb-8'>
                    The useRef hook in React is used to generate a changeable reference to a value that is persistent between views. The primary use case for useRef is to access DOM nodes or to store modified data that are not part of the component state. <br />
                    The useRef method returns a mutable ref object with a "current" field. We may assign any value to the ref object's "current" attribute, and this value will remain across displays. When the value assigned to the ref object is changed, it does not cause a re-render. The ref object may be used to retrieve DOM nodes, save a prior value for comparison in a useEffect hook, or save a changeable value outside of component state. The most common use cases for useRef are given below: <br />
                    i. Accessing DOM Nodes: We may use useRef to directly access and edit a DOM node without triggering a re-render. This is very helpful when dealing with third-party libraries that require direct access to a DOM node. <br />
                    ii. Storing Prior Values: In a useEffect hook, you may use useRef to save a previous value for comparison. This can be useful for tracking changes in a value over time or for constructing custom logic that relies on prior values. <br />
                    iii. Caching Expensive Computations: We may use useRef to cache the result of an expensive computation so that it doesn't have to be redone on every render.br

                </p>
                <h3 className='text-2xl mb-4'>
                    4. What is useMemo and what is it's uses in React?
                </h3>
                <p className='text-xl mb-8'>
                    useMemo is a React hook that allows you to memoize the result of a function and avoid needless recalculations. The primary goal of useMemo is to improve application performance by caching the output of a computationally intensive calculation. useMemo returns a function-calculated memoized value. As the second input to useMemo, we may supply an array of dependencies. The calculated value from the memoized data will be updated if any of the dependents change. Only when it is first displayed or when one of the dependents changes is the memoized value calculated. Otherwise, the previously cached information is returned. <br />
                    Some common use cases for useMemo are given below: <br />
                    i. Expensive Calculations: Using useMemo, we may cache the output of a costly calculation, such as a complicated computation or a data transformation. This can increase your app's performance by reducing unneeded re-computations. <br />
                    ii. UseMemo can be used to optimize the rendering of a component by eliminating needless re-renders. This is very helpful when working with massive datasets or creating complicated UI components. <br />
                    iii. Reduced Props: We may avoid passing costly props down via a deep component tree by using useMemo. You may avoid having to transfer the same data down through numerous layers of components by storing the result of a costly calculation. <br />

                </p>
            </div>

        </div>
    );
};

export default Blog;