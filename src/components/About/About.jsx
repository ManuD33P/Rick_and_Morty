import imgSrc from "../../utils/imgAbout/yo3.jpg";
import styled from "./about.module.css";
import Title from "../Title/Title";
const About = () => {
  return (
    <>
      <Title />
      <section className={styled.content}>
        <div className={styled.container}>
          <div className={styled.title}>
          <h1 >About me</h1>
          </div>
          <div className={styled.image}>
          <img  src={imgSrc} alt='Esta es mi imagen de perfil' />
          </div>
          <div className={styled.text}>
          <p >
            Hello my name Emanuel Dominguez, they call me Manu or Ema, I study
            programming since I was a kid as a hobby, I am 27 years old, after
            having been a paratrooper soldier in the Argentine Army, I decided
            return to this old passion and I set myself the objective that I
            intend to achieve to live from this. I like computers, electronics,
            physics, and it also attracts my attention the development of video
            games, as well as new services.
          </p>
         </div>
        </div>
      </section>
    </>
  );
};

export default About;
