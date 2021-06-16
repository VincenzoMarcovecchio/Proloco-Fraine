import React from "react"

const LinkList = (props) => {
    const linkMarkup = props.options.map((link) => (
      <li key={link.id} className="link-list-item">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-list-item-url"
        >
          {link.text}
        </a>
      </li>
    ));


    return <><style>{`
    .link-list {
      padding: 0;
    }

    .link-list-item {
      text-align: left;
      font-size: 0.9rem;
    }

    .link-list-item-url {
      text-decoration: none;
      margin: 6px;
      display: block;
      color: #1d1d1d;
      background-color: #f1f1f1;
      padding: 8px;
      border-radius: 3px;
      box-shadow: 2px 2px 4px rgba(150, 149, 149, 0.4);
    }`}</style><ul className="link-list">{linkMarkup}</ul>;
  </>};

  export default LinkList;

  // in src/c/LinkList.css
