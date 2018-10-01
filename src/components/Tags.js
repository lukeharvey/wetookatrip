import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const Tags = ({ tags }) => {
  if (tags && tags.length) {
    return (
      <div style={{ marginTop: "3rem" }}>
        <h3>Tags</h3>
        <ul className="taglist">
          {tags.map(tag => (
            <li key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

Tags.propTypes = {
  tags: PropTypes.array
};

export default Tags;
