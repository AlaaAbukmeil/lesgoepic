import { Helmet } from "react-helmet";
import { seoParams } from "../../models/seoParams";

function SeoHelment(params: seoParams) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{params.title}</title>
      <meta
        name="description"
        content={params.description}
      />
      <meta
        name="keywords"
        content={params.keywords}
      ></meta>
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

export default SeoHelment;
