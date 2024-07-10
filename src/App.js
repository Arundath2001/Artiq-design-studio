import Navbar from './components/Navbar';
import './App.css';
import TopHeading from './components/TopHeading';
import Elipse from './components/Elipse';
import Work from './components/Work';
import CircleText from './components/CircleText';
import Service from './components/Service';
import Projects from './components/Projects';
import ScrollText from './components/ScrollText';
import Footer from './components/Footer';
import Contactform from './components/ContactForm';

function App() {

  const leftHeading = [
    "Designing Inspiration",
    "for Brands.",
  ];

  const leftPara = [
    "Dedicated to bringing your vision to",
    "success, with innovation and creativity",
    "at every step.",
  ];

  const rightHeading = [
    "Beyond Boundaries: Elevating",
    "Audiovisual Innovation,",
    "Grounded in Shared Human",
    "Experiences",
  ];

  const rightPara = [
    "Embracing innovation in",
    "audiovisual realms while remaining",
    "deeply rooted in the universal",
    "narratives that unite us all",
  ];

  return (
    <div className="App">
      <Navbar />
      <TopHeading align="left" heading={leftHeading} paragraph={leftPara} />
      <Elipse />
      <TopHeading margin="alignment" align="right" heading={rightHeading} paragraph={rightPara} />
      <Work />
      <ScrollText text="Inspiration * Technology * Innovation * Design * Awards * Artist" />
      <CircleText />
      <Service />
      <Projects />
      <ScrollText text="Let’s Talk * Need Our Services? * New Project Idea? * Got Questions? * Need Branding? " />
      <Contactform />
      <Footer />
    </div>
  );
}

export default App;
