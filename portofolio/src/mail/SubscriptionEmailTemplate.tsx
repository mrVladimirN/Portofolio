import { ExtendedNewsLetter } from "@/types/newsLetterType";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailSubscription = ({
  email,
  name,
  uuid,
}: ExtendedNewsLetter) => {
  const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

  const main = {
    backgroundColor: "#efeef1",
    fontFamily,
  };

  const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
  };

  const container = {
    width: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff",
  };

  const footer = {
    width: "580px",
    margin: "0 auto",
  };

  const content = {
    padding: "5px 50px 10px 60px",
  };

  const logo = {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    padding: 30,
  };

  const sectionsBorders = {
    width: "100%",
    display: "flex",
  };

  const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px",
  };

  const link = {
    textDecoration: "underline",
  };
  return (
    <Html>
      <Head />
      <Preview>Vladimir Nitu's Newsletter</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>👋 Welcome to Vladimir's newsletter</Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionBorder} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>
            <Text style={paragraph}>
              Thank you for subscribing to my newsletter
            </Text>
            <Text style={paragraph}>
              Before we start, add my email address to your contact list, in
              order for the emails to <strong>not be considered SPAM</strong>
            </Text>
            <Text style={paragraph}>
              You can read all my other articles&nbsp;
              <Link href="https://example.com" style={link}>
              here.
              </Link>
            </Text>
            <Text style={paragraph}>
              Check my linketree&nbsp;
              <Link href="https://example.com" style={link}>
              Linketree 
              </Link>
              &nbsp;in order to stay connected on all other platforms
            </Text>
            <Text style={paragraph}>
              Thanks for reading this, I'm glad that you are here.
              <br />
              Remain curious,
              <br />
              Vladimir Nitu
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            You received this email because you subscribed. If you want to
            unsubscribe click{" "}
            <Link
              href={`${process.env.DOMAIN}/api/unsubscribe?uuid=${uuid}&email=${email}`}
            >
              here
            </Link>
          </Text>
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            © {new Date().getFullYear()} , All Rights Reserved <br />
          </Text>
        </Section>
      </Body>
    </Html>
  );
};
