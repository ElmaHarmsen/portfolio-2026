import events from "../assets/casestudy/events.png";
import eventsExtended from "../assets/casestudy/events-extended.png";
import fashionHabits from "../assets/casestudy/fashion-habits.png";
import discardHabits from "../assets/casestudy/discard-habits.png";
import navigationMap from "../assets/casestudy/navigation-map.png";
import infographic from "../assets/casestudy/infographic.png";
import logo from "../assets/casestudy/fynder-logo.png";
import newEvent from "../assets/casestudy/new-event.png";
import eventsLofi from "../assets/casestudy/events-lofi.jpeg";
import profileLofi from "../assets/casestudy/profile-lofi.jpeg";
import infographicLofi from "../assets/casestudy/infographic-lofi.jpeg";
import requirements from "../assets/casestudy/moscow.png";
import ideation from "../assets/casestudy/ideation.png";

const mainImages = [
  {
    columnStart: 2,
    columnSpan: 3,
    images: [
      {
        img: events,
        description: "Clothing swap events page",
        alt: "x",
      },
    ],
  },

  {
    columnStart: 5,
    columnSpan: 3,
    images: [
      {
        img: eventsExtended,
        description: "Event with more details",
        alt: "x",
      },
    ],
  },
  {
    columnStart: 8,
    columnSpan: 3,
    images: [
      {
        img: newEvent,
        description: "Create your own event",
        alt: "x",
      },
    ],
  },
];

const designProcessImages = [
  {
    columnStart: 2,
    columnSpan: 4,
    images: [
      {
        img: eventsLofi,
        description: "Lofi events page",
        alt: "x",
      },
    ],
  },
  {
    columnStart: 6,
    columnSpan: 3,
    images: [
      {
        img: profileLofi,
        description: "Lofi profile page",
        alt: "x",
      },
    ],
  },
  {
    columnStart: 9,
    columnSpan: 3,
    images: [
      {
        img: infographicLofi,
        description: "Lofi infographic",
        alt: "x",
      },
    ],
  },
];

const designProcessSteps = [
  {
    title: "Objective",
    description:
      "The project's objective was to lower the environmental impact of modern consumer culture in fashion by extending garment life cycles through circular use, specifically targeting the Uppsala student community, as this was the client's location. The application encourages consumer-to-consumer garment reuse through locally organised clothing swap events.",
    img: fashionHabits,
  },
  {
    title: "Getting to the problem",
    description:
      "Through a series of interviews with relevant stakeholders, their shopping habits, fashion styles, discarding habits, as well as their knowledge and opinions on the problem were identified. The main issue of fast fashion revolves around the short lifespan of clothes, either through poor quality or a change of mind from its owner, which results in the frequent purchasing of new fashion garments. ",
    img: discardHabits,
  },
  {
    title: "Ideation",
    description: (
      <>
        The{" "}
        <a
          href="https://en.wikipedia.org/wiki/PACT_(interaction_design)"
          target="blank"
          className="link"
        >
          PACT analysis
        </a>{" "}
        as well as the{" "}
        <a
          href="https://www.behaviormodel.org/"
          target="blank"
          className="link"
        >
          Fogg behavior model
        </a>{" "}
        were applied to further identify which specific aspects the solution
        would need to focus on. Results identified the context in which
        stakeholders were facing mental challenges, but also potential solutions
        that address these challenges, such as clothes sharing and clothing swap
        events, and the idea of sharing information and creating awareness on
        the topic of fashion recycling.
      </>
    ),
    img: ideation,
  },
  {
    title: "Requirements",
    description: (
      <>
        Based on this idea, both functional and non-functional requirements were
        established and prioritised using the{" "}
        <a
          href="https://en.wikipedia.org/wiki/MoSCoW_method"
          target="blank"
          className="link"
        >
          MoSCoW method
        </a>
        . It was for example important that events and user profiles contain
        details such as their preferred clothing style and size and the
        location, to increase the effectiveness of the clothing swap events. It
        was also important to use a form of{" "}
        <a
          href="https://www.dictionary.com/culture/tech-science/positive-reinforcement"
          target="blank"
          className="link"
        >
          positive reinforcement
        </a>{" "}
        regarding the user's recycling impact to encourage behaviour change.
      </>
    ),
    img: requirements,
  },
  {
    title: "Application functionality",
    description: (
      <>
        A navigation map was created to transfer the required functionalities
        into a{" "}
        <a
          href="https://www.interaction-design.org/literature/topics/user-flows?srsltid=AfmBOoq2FmOeQxvA6rZOwkbm50Xj_SN7EQRlZ4nrLleBgC1-BeAb17xW"
          target="blank"
          className="link"
        >
          user flow
        </a>{" "}
        an establish the app's screens and features, and the connections
        between. The next step was to design a low fidelity prototype of the
        application's user interface and conduct user tests.
      </>
    ),
    img: navigationMap,
  },
];

const prototypingProcessSteps = [
  {
    title: "Lofi prototyping",
    description:
      "A total of three iterations were completed during the prototyping and user testing phase, where each iteration tested the UI with users and identified areas for improvement. The third iteration resulted in the final high fidelity prototype.",
  },
  {
    title: "User testing",
    description: (
      <>
        For each user testing iteration were goals established to ensure the
        user tests were centred within a realistic scope. Users were given paper
        prototypes to interact with, and afterwards were asked about their
        experience and understanding of the app. Results were analysed with a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Thematic_analysis"
          target="blank"
          className="link"
        >
          thematic analysis
        </a>{" "}
        after which the UI was improved and the testing scope was adjusted for
        the next iteration.
      </>
    ),
  },
  {
    title: "Outcomes",
    description:
      "This UI/UX case study aimed to extend clothing garment life cycles through circular use, and increase the awareness on the negative environmental impacts of fast fashion. The solution introduced a new approach to reduce fashion waste  through organised clothing swap events within local communities, such as student dormitories and nations. The solution addresses specific challenges that were identified among stakeholders regarding the use and recycling of clothing, and uses an application to connect people and create opportunities for fashion recycling through clothing swap events.",
  },
];

export default function CaseStudy() {
  return (
    <>
      <h1 className="text-container full-width">
        UI/UX Case Study: Fynder - The app that aims to extend the lifecycle of
        clothes and break wasteful consumer habits
      </h1>
      {mainImages.map((item, index) => (
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

      <h1 className="text-container full-width">Design process</h1>

      {designProcessSteps.map((item, index) => (
        <>
          <img
            src={item.img}
            alt="img"
            className="img-container alignment-left"
            style={{ width: "100%" }}
          />
          <div className="casestudy-container">
            <h2>
              0{index + 1}.{item.title}
            </h2>
            <div className="text-container small-gap">
              <p>{item.description}</p>
            </div>
          </div>
        </>
      ))}

      <h1 className="text-container full-width">Prototyping & User testing</h1>
      {designProcessImages.map((item, index) => (
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

      {prototypingProcessSteps.map((item, index) => (
        <>
          <div className="casestudy-container">
            <h2>
              0{index + 6}.{item.title}
            </h2>
            <div className="text-container small-gap">
              <p>{item.description}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
