import Head from 'next/head';
import Container from "../components/Container";

const Services = () => {
  return (
    <div>
      <Container>
      <Head>
        <title> services </title>
      </Head>
        <h2>estoy en services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quod,
          exercitationem eveniet laborum sunt quo esse alias delectus pariatur
          ipsum minima ad necessitatibus. Minus suscipit atque cupiditate culpa
          ipsa ratione.
        </p>
        <button className="btn btn-danger">hola</button>
      </Container>
    </div>
  );
};

export default Services;
