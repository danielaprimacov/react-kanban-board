import { useRouteError } from "react-router-dom";

import ErrorComponent from "../assets/components/ErrorComponent/ErrorComponent";
import RootLayout from "../assets/components/RootLayout";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error ocurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resourse or page. ";
  }

  return (
    <RootLayout>
      <ErrorComponent title={title} message={message} />
    </RootLayout>
  );
}

export default ErrorPage;
