import {
  SiGithub,
  SiBitbucket,
  SiJirasoftware,
  SiConfluence,
} from "react-icons/si";

export function Others() {
  return (
    <ul>
      <li>
        <SiGithub /> Git/GitHub
      </li>
      <li>
        <SiBitbucket /> Bitbucket
      </li>
      <li>
        <SiJirasoftware /> Jira
      </li>
      <li>
        <SiConfluence /> Confluence
      </li>
    </ul>
  );
}
