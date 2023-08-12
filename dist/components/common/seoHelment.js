"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_1 = require("react-helmet");
function SeoHelment(params) {
    return (<react_helmet_1.Helmet>
      <meta charSet="utf-8"/>
      <title>{params.title}</title>
      <meta name="description" content={params.description}/>
      <meta name="keywords" content={params.keywords}></meta>
      <meta name="robots" content="index, follow"/>
    </react_helmet_1.Helmet>);
}
exports.default = SeoHelment;
