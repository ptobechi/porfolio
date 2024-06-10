"use client";
import { useState } from "react";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Modal from "@/components/Modal";
import Services from "@/components/Services";
import Card from "@/components/Card";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.toggle('blur', !isModalOpen);
    }
  };

  return (
    <>
    <main className="">
      <Banner toggleModal={toggleModal} />
      <Services />
      <Gallery/>
    </main>
    <Card toggleModal={toggleModal}/>
    <Modal isOpen={isModalOpen} toggleModal={toggleModal}/>
    </>
  );
}
