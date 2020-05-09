import Head from "next/head";
import Container from "../components/Container";
import User from "../components/User";
import fetch from "isomorphic-fetch"

const Index = (props) => {

console.log(props);

  return (
    <div>
      <Container>
      <Head>
        <title>index</title>
      </Head>

        
        <div className="row" >
            <div className="col-6 mt-4" >

        <h3 className="text-center my-3" >Galeria de Usuarios</h3>
            {props.users.map(ev_users => (
                <User
                key={ev_users.id}
                ev_users={ev_users}
                />
            ))}
            </div>
        </div>
       
        
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
    const res = await  fetch('https://reqres.in/api/users')
    const resJson =  await res.json()
    return {users: resJson.data}
}

export default Index;
