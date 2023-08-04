import AccelerateAssistance from "./navbar/AccelerateAssistance";
import HustleService from "./navbar/HustleService";
import OurVibes from "./navbar/OurVibes";
import WhoAreYou from "./navbar/WhoAreYou";

export const navBar = [
    { name: "Hustle Service", value: <HustleService />, service: 'HustleService' },
    { name: "Who Are You?", value: <WhoAreYou />, service: 'WhoAreYou' },
    { name: "Accelerate Assistance", value: <AccelerateAssistance />, service: 'AccelerateAssistance' },
    { name: "Our Vibes", value: <OurVibes />, service: 'OurVibes' },
]