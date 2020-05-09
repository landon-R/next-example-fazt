import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Next app</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Navigation />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
