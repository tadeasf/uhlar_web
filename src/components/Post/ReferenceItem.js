import * as React from "react";
import Button from "../Button/Button";
import { PostItemStyles } from "./PostStyles";

const ReferenceItem = ({ node }, key) => {
  const { title, gatsbyPath, introduction, createdAt } = node;
  return (
    <PostItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      <div className="blogitem__meta">
        <Button as="span" text="Čti víc" arrow={true} />
        <p>{createdAt}</p>
      </div>
    </PostItemStyles>
  );
};

export default ReferenceItem;
