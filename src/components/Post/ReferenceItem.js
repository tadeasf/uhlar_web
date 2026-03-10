import * as React from "react";
import Button from "../Button/Button";
import { PostItemStyles } from "./PostStyles";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
};

const ReferenceItem = ({ node }, key) => {
  const { title, gatsbyPath, introduction, createdAt } = node;
  return (
    <PostItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      <div className="blogitem__meta">
        <Button as="span" text="Číst referenci" arrow={true} />
        <p>{formatDate(createdAt)}</p>
      </div>
    </PostItemStyles>
  );
};

export default ReferenceItem;
