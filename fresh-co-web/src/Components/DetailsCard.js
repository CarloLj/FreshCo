import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Pages/Feed.css";

export default function ProductCard({
  Nombre,
  Locacion,
  ImagenUrl,
  Descripcion,
}) 

{
  return (
    <div className="max-w-sm">
  <Card
    horizontal={true}
    imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div>
  );
}
