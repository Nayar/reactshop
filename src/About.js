const About = (props) => (
    <div>
      <h1>About me : My Hobbies</h1>
      <h1>I love {props.hobby}</h1>
      <img
        src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
        alt="About"
        width="40%" />
      <p>I love playing the guitar!</p>
    </div>
  );

export default About