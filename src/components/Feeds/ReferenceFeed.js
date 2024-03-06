import React from "react";
import ReferenceItem from "../Post/ReferenceItem";
import useAllReference from "../../hooks/use-all-references";

const ReferenceFeed = () => {
  const allReference = useAllReference();

  return allReference.map((node, index) => {
    return <ReferenceItem key={index} node={node} />;
  });
};

export default ReferenceFeed;
