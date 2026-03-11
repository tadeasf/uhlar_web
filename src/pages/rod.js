/** @format */

import * as React from "react"
import Seo from "../components/SEO"

const RodMap = React.lazy(() => import("../components/RodMap/RodMap"))

const RodPage = () => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <>
      <Seo title="Mapa rodů — Kamila & Monika Uhlářovy" />
      {mounted && (
        <React.Suspense fallback={null}>
          <RodMap />
        </React.Suspense>
      )}
    </>
  )
}

export default RodPage
