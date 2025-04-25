import {
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazon,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

export function Frameworks() {
  return (
    <ul>
      <li>
        <SiAwslambda /> AWS Lambda
      </li>
      <li>
        <SiAmazonapigateway /> API Gateway
      </li>
      <li>
        <SiAmazon /> S3
      </li>
      <li>
        <SiAmazon /> Cognito
      </li>
      <li>
        <SiDocker /> Docker
      </li>
      <li>
        <SiKubernetes /> Kubernetes
      </li>
    </ul>
  );
}
