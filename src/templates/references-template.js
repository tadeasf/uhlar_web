/** @format */

import React from "react";
import { Link } from "gatsby";
import Button from "../components/Button/Button";
import { PostSingleStyles } from "../components/Post/PostStyles";
import LatestPosts from "../components/Post/LatestPosts";
import RichText from "../components/RichText";

const ReferencesTemplate = (contentfulReference) => {
  const { title, createdAt, content } = contentfulReference;
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          {createdAt && <p className="blogsingle__date">Shared {createdAt}</p>}
          {content && (
            <article className="blogsingle__content">
              <RichText richText={content} />
              <div className="blogsingle__back">
                <Button to="/reference" text="Zpět na reference" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts title="Aktuality" />
    </>
  );
};

export default ReferencesTemplate;
