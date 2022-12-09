import { Container, Text, Row, Col, Button, Progress } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import PurchaseCard from "../components/PurchaseCard";
import Supporters from "../components/Supporters";
import { useContext } from "react";
import { WalletConnectContext } from "../context/WalletConnectContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faYoutube,
  faTwitter,
  faMedium,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const context = useContext(WalletConnectContext);
  const { ConnectWallet, isConnected } = context;

  return (
    <div>
      <Head>
        <meta
          name="description"
          content='"Calvaria: Duels of Eternity - this is the epic Play-to-Earn (P2E) battle card game built on the blockchain.'
          data-react-helmet="true"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "100vh" }}>
        <Container css={{ mt: "$16", dflex: "center" }}>
          <Image src="/logo.png" alt="after" width={450} height={150} />
          <Container css={{ ai: "center", d: "flex", jc: "center" }}>
            <div className="relative">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="65"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#c6864b"
                  d="m8.15.146 1.697 1.232 2.937-.016.057.172.88 2.66 1.956 1.421-.736 2.264.824 2.488-2.144 1.575-.876 2.694H9.956l-1.835 1.348-1.877-1.348H3.26l-.907-2.794-1.937-1.39.736-2.305-.824-2.533 2.123-1.541.847-2.659 2.833-.016L8.001.04l.147.107h.002Zm2.379 1.728 2.5 1.817-.605-1.828-1.895.01Zm4.153 6.807-.796 2.449 1.292-.95-.496-1.5Zm-5.567 5.956H7.102l1.018.73.995-.73Zm-7.02-3.597-.677-2.08-.413 1.297 1.09.783Zm1.04-7.462L5.44 1.902l-1.776.01-.53 1.666Zm10.857 1.429.686 2.072.414-1.273-1.1-.799Zm-1.06 7.443-2.295 1.687h1.747l.549-1.687ZM5.55 14.137l-2.511-1.803.585 1.803H5.55ZM1.413 7.334l.784-2.458-1.28.93.496 1.528ZM6.99 1.395l2.015-.01-1-.728-1.015.738ZM13.8 6.023 13.3 4.505l-1.751-1.272L9.686 1.88l-3.39.019-3.418 2.484-1.2 3.764 1.1 3.384 3.628 2.606h3.39l3.402-2.5 1.22-3.756-.615-1.859-.002.001Z"
                />
              </svg>
              <a
                href="https://t.me/CalvariaChat"
                className="absolute top-7 left-3"
                style={{ color: "orange", width: "18px" }}
              >
                <FontAwesomeIcon icon={faTelegram} />{" "}
              </a>
            </div>
          </Container>
          <Container css={{ dflex: "center" }}>
            <Container css={{ dflex: "center", mt: "$14" }}>
              <Image src="/before.png" width={120} alt="before" height={20} />
            </Container>
            <Text size={40} id="text">
              Presale
            </Text>
            <Container css={{ dflex: "center", mt: "$1" }}>
              <Image src="/after.png" alt="after" width={400} height={30} />
            </Container>
          </Container>
          <Text size={40} id="text">
            Don&apos;t miss out on Calvaria presale!
          </Text>
          <Text h6 size={18} id="sect">
            Calvaria: Duels of Eternity is a project centered around speeding up
            the mass adoption of crypto through play-to-earn games. We already
            partnered with the biggest names in the industry because they love
            our vision. Join us, and together - only the sky&apos;s the limit! Tokens
            will be available for claim at launch.
          </Text>
          <Progress
            css={{ mt: "$7" }}
            color="warning"
            striped
            squared
            size="lg"
            value={77}
          />
          <Text color="warning">Stage 5 progress: 77%</Text>
          <Text className="font-2 fnt">
            Raised <strong className="font-2">2,247,596 USDT</strong> out of{" "}
            <strong className="font-2">3,075,000 USDT.</strong> Sold{" "}
            <strong className="font-2">124,541,440 $RIA </strong>out of{" "}
            <strong className="font-2">150,000,000 $RIA </strong>
          </Text>
          {isConnected ? (
            <div className="mt-16">
              <PurchaseCard />
            </div>
          ) : (
            <Container css={{ dflex: "center", mt: "$16" }}>
              <Col justify="center" align="center">
                <Text b size={28} className="font-2">
                  1 USDT = 30.77 $RIA
                </Text>
                <Text size={18} className="font-2" color="warning">
                  Hurry before the end of presale!
                </Text>
                <Text size={18} className="font-2">
                  Connect your wallet to buy tokens:
                </Text>
              </Col>
              <Button
                onClick={ConnectWallet}
                css={{ mt: "$9" }}
                color="warning"
              >
                <Text style={{ color: "black" }} size={22} id="text">
                  Connect Wallet
                </Text>
              </Button>
            </Container>
          )}
          <Container css={{ dflex: "center", mt: "$18" }}>
            <Container css={{ dflex: "center", mt: "$14" }}>
              <Image src="/before.png" alt="before" width={120} height={20} />
            </Container>
            <Text size={40} id="text">
              Supported by
            </Text>
            <Container css={{ dflex: "center", mt: "$1" }}>
              <Image src="/after.png" alt="after" width={400} height={30} />
            </Container>
            <Supporters />
          </Container>
        </Container>
      </div>
    </div>
  );
}
