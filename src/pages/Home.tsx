import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Beliefs } from "../components/Beliefs";
import { Principles } from "../components/Principles";
import { Philosophy } from "../components/Philosophy";
import { Capabilities } from "../components/Capabilities";
import { Methodology } from "../components/Methodology";
import { Outcomes } from "../components/Outcomes";
import { Industries } from "../components/Industries";
import { Why } from "../components/Why";
import { Research } from "../components/Research";
import { OpenSource } from "../components/OpenSource";
import { Manifesto } from "../components/Manifesto";
import { ContactCta } from "../components/ContactCta";

export function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Beliefs />
            <Principles />
            <Philosophy />
            <Capabilities />
            <Methodology />
            <Outcomes />
            <Industries />
            <Why />
            <Research />
            <OpenSource />
            <Manifesto />
            <ContactCta />
        </>
    );
}
