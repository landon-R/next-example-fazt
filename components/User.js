const User = ({ ev_users }) => {
  const { first_name, last_name, email, avatar } = ev_users;

  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row no-gutters">
      <div className="col-md-4 my-auto d-flex justify-content-center">
        <img src={avatar} className="card-img " alt="avatar"  style={{borderRadius: "50%", width: "80%", border: "5px solid" }} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{first_name} {last_name} </h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Email: {email} </small></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default User;
