import { Link } from "react-router-dom";
import { Lorem } from "./lorem";

export const Component = () => (
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
        <a href="https://reactrouter.com/en/main">React Router 6</a>
      </li>
      <li>
        <a href="https://getbootstrap.com/2.3.2/">Bootstrap 2</a> (just for fun)
      </li>
      <li>
        Modules loaded via <a href="https://esm.sh/">esm.sh</a>
      </li>
    </ol>
    <Lorem></Lorem>
    <hr />
    <Link to={"/about"} className="btn btn-info">
      Click to check the about page
    </Link>
  </>
);
