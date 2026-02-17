import me1 from "../assets/me1.jpg";
import me2 from "../assets/me2.jpg";
import lego from "../assets/lego.jpg";
import fire from "../assets/fire.png";
import dreamcatcher from "../assets/dreamcatcher.jpg";
import city from "../assets/city.jpg";

const images = [
  {
    columnStart: 2,
    columnSpan: 3,
    images: [
      {
        img: lego,
        description:
          "Lego photography is something I like to do while travelling",
        alt: "lego photography of a knight with a wolf standing on a stone in nature",
      },
    ],
  },
  {
    columnStart: 5,
    columnSpan: 4,
    images: [
      {
        img: fire,
        description:
          "FLUXIT: Favourite artpiece from Allt Ljus Uppsala light festival 2025",
        alt: "artpiece of a big fire made out of light for the Uppsala light festival",
        gap: 3,
      },
      {
        img: city,
        description: "Exploring new cities and nature",
        alt: "artpiece of a big dreamcater made out of light for the Uppsala light festival",
      },
    ],
  },
  {
    columnStart: 9,
    columnSpan: 3,
    images: [
      {
        img: dreamcatcher,
        description: "Dreamcatcher: Second favourite artpiece from Allt Ljus",
        alt: "artpiece of a big dreamcater made out of light for the Uppsala light festival",
      },
    ],
  },
];

export default function About() {
  return (
    <>
      <h1 className="about-container full-width">
        I am driven by an ambition to improve how people experience and interact
        with technology, while carefully considering how design and technical
        decisions affect people in everyday use
      </h1>
      <div className="about-container">
        <div className="about-container__content">
          <img src={me1} alt="me under a big stone in the nature" />
        </div>
      </div>
      <div className="text-container">
        <h2>About me</h2>
        <div className="text-container small-gap">
          <p>
            Originally from the Netherlands and now living in Sweden, I work as
            a <span className="emphasized">Frontend Developer</span> and{" "}
            <span className="emphasized">Web Designer</span>, driven by a strong
            interest in interaction design. I enjoy bringing design and
            development together to better understand how people experience
            technology.
          </p>
          <p>
            I’m naturally curious and eager to learn, and I value listening to
            different perspectives to uncover the stories people create through
            their interactions with different kinds of interfaces and
            technologies. With this mindset, I aim to design user interfaces
            that feel <span className="emphasized">reliable</span>,{" "}
            <span className="emphasized">intuitive</span>, and{" "}
            <span className="emphasized">thoughtfully created</span>, built on
            solid design principles and with a strong foundation in interaction
            design and human-computer interaction.
          </p>
        </div>{" "}
      </div>

      <div className="about-container">
        <div className="about-container__content">
          <img src={me2} alt="me at the women in tech conference" />
        </div>
      </div>
      <div className="text-container small-gap">
        <p>
          This mindset translates into a strong focus on collaboration and
          shared learning. I value working closely with others in the team where
          we learn from each other and share our ideas openly.
        </p>
        <p>
          I hold a master’s degree in{" "}
          <span className="emphasized">Human-Computer Interaction</span> and
          have a background in{" "}
          <span className="emphasized">Web Development</span> as well as{" "}
          <span className="emphasized">
            Communication and Multimedia Design
          </span>
          , which has thought me to communicate clearly across design and
          development and keep users at the centre. Alongside this, I continue
          to build my technical skills through hands-on work and ongoing
          learning, including foundational training in cybersecurity and a{" "}
          <span className="emphasized">React </span> course I’m currently
          following.
        </p>
        <p>
          Jag talar Svenska och kommer att fortsätta bo och arbeta i Sverige :D
        </p>
      </div>

      <div className="text-container interests-title">
        <h2>Interests that shape who I am</h2>
      </div>

      {images.map((item, index) => (
        <div
          key={index}
          className="img-interests"
          style={{
            gridColumn: ` ${item.columnStart} / span ${item.columnSpan}`,
          }}
        >
          {item.images.map((imgItem, imgIndex) => (
            <div key={imgIndex} style={{ marginBottom: `${imgItem.gap}rem` }}>
              <img src={imgItem.img} alt={imgItem.alt} />
              <p>{imgItem.description}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
