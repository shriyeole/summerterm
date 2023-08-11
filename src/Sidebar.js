import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/intro">Introduction </Link>
          </li>
          <li>
          <Link to="/objective">Objective </Link>
          </li>
          <li>
          <Link to="/experiments">List of Experiments </Link>
          </li>
          <li>
          <Link to="/audience">Target Audience </Link>
          </li>
          <li>
          <Link to="/course">Course Alignment </Link>
          </li>
          <li>
          <Link to="/feedback">Feedback </Link>
          </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
