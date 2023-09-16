/** @format */

import React from "react";
import PostItem from "../Post/PostItem";
import useAllReference from "../../hooks/use-all-references"; // Update the hook to fetch references

const ReferenceFeed = () => {
  const allReference = useAllReference(); // Update the variable name

  return allReference.map((node, index) => {
    return <PostItem key={index} node={node} />;
  });
};

export default ReferenceFeed;
