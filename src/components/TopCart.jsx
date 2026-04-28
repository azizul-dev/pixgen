import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const TopCart = ({ p }) => {
  return (
    <Card className=" border rounded-xl">
      <div className=" relative w-full aspect-square">
        <Image
          src={p.imageUrl}
          alt={p.title}
          fill
        //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" rounded-xl object-cover"
        />
        <Chip  size="sm" className=" absolute right-2 top-2">{p.category}</Chip>
      </div>
      <div className=" font-semibold">{p.title}</div>
      <div className=" flex gap-4">
        <div className=" flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{p.likes}</p>
        </div>
        <Separator orientation="vertical" />
        <div className=" flex items-center gap-2">
          <p>
            <BiDownload />
          </p>
          <p>{p.downloads}</p>
        </div>
      </div>
      <Link href={`/all-photo/${p.id}`}><Button variant=" outline" className={'w-full border'}>View</Button></Link>
    </Card>
  );
};

export default TopCart;
