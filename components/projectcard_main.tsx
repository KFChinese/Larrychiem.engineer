import { Card, Button } from "@nextui-org/react";
import Link from "next/link";

export default function ProjectCard_main({
  bg_img,
  title,
  status,
  footer_txt_1,
  footer_txt_2,
  link_text,
  btn_lnk,
}) {
  return (
    <div className="mt-5 text-white">
      <Card className="w-full h-[300px] relative">
        <div className="absolute top-5 left-5 z-10">
          <p className="text-xs font-bold uppercase text-white/70">{status}</p>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <Card.Body className="p-0">
          <img
            src={bg_img}
            alt="Card background"
            className="w-full h-full object-cover"
          />
        </Card.Body>
        <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-md border-t border-white/20 z-10 p-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-white">{footer_txt_1}</p>
            <p className="text-xs text-white">{footer_txt_2}</p>
          </div>
          <Button
            flat
            auto
            rounded
            color="default"
            className="text-white bg-black/40"
          >
            <Link href={btn_lnk} target="_blank" rel="noopener noreferrer">
              {link_text}
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
