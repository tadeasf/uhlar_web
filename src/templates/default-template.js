import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import RichText from "../components/RichText"
import { PageTitleStyles } from "../components/PageTitle/PageTitleStyles"

const DefaultTemplate = contentfulPage => {
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <PageTitleStyles>
          <h1>{contentfulPage.title}<span>.</span></h1>
        </PageTitleStyles>
        <div className="section">
          <div className="container container__tight">
            <RichText richText={contentfulPage.mainContent} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DefaultTemplate
