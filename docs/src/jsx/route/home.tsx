import { FC } from "react";

export const HomeComponent: FC = () => (
  <>
    <h1>Home page</h1>
    <p>
      This is a demonstration of using{" "}
      <a href="https://github.com/alangpierce/sucrase">sucrase</a> in a service
      worker, to transpile JSX on the fly.
    </p>
    <p>Here are the libraries used:</p>
    <ol>
      <li>
        An{" "}
        <a href="https://github.com/altbdoor/sucrase-build-iife">
          IIFE build of sucrase for browser
        </a>
        , which is based off{" "}
        <a href="https://github.com/alangpierce/sucrase">sucrase</a> of course.
      </li>
      <li>
        <a href="https://react.dev/">React 18</a>
      </li>
      <li>
        <a href="https://tanstack.com/router/v1">TanStack Router 1</a>
      </li>
      <li>
        <a href="https://getbootstrap.com/2.3.2/">Bootstrap 2</a> (just for fun)
      </li>
      <li>
        Modules loaded via <a href="https://esm.sh/">esm.sh</a>
      </li>
    </ol>

    <a href="#/about" className="btn btn-info">
      Click to check the about page
    </a>
  </>
);
