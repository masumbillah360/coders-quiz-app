import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='bg-slate-100 p-3 rounded'>
                <h1 className='text-2xl font-semibold'>Q: What is the purpose of react-router ? ?</h1>
                <p>React Router is a lightweight, fully-featured routing library for the React JavaScript library. React Router runs everywhere that React runs; on the web, on the server (using node.js), and on React Native. <br />React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />Two such approaches are static and dynamic routing. Frameworks like Angular, Ember and React Router library (in the past) supported static routing. But recently, React Router introduced dynamic routing to address some of the core limitations with static routing.</p>
            </div>
            <div className='bg-slate-100 p-3 rounded'>
                <h1 className='text-2xl font-semibold'>Q: How does context api works ?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='bg-slate-100 p-3 rounded'>
                <h1 className='text-2xl font-semibold'>Q : What is useRef in reactJs ?</h1>
                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br />The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;