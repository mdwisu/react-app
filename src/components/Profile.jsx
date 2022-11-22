const Profile = (props) => {

  const {name, lastName} = props
  
  return (
    <div>
      <h1>Name: {name} {lastName}</h1>
    </div>
  );
};

export default Profile;
