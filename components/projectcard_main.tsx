import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Link from "next/link";

export default function ProjectCard_main({ bg_img, title, status, footer_txt_1, footer_txt_2, link_text, btn_lnk  }){ return(
<div className="mt-5 text-white">
  <Card css={{ w: "100%", h: "300px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {status}
        </Text>
        <Text h3 color="#FFF">
            {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={bg_img}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#FFF" size={12}>
            {footer_txt_1}
          </Text>
          <Text color="#FFF" size={12}>
            {footer_txt_2}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="default">
              <Link
      
                target="_blank" rel="noopener noreferrer" href={btn_lnk}
              >
            {link_text}

              </Link>
              
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </div>
);
}