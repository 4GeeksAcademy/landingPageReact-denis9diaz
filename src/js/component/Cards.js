import React from 'react'
import Card from './Card'

const Cards = () => {
  let cardsInfo = [
    { title: "Titulo 1", text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido.", image: "https://i.etsystatic.com/9780618/r/il/931cf2/5021321103/il_794xN.5021321103_cih3.jpg" },
    { title: "Titulo 2", text: "Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería.", image: "https://img.freepik.com/fotos-premium/flor-colores-fondo-negro_800563-13726.jpg" },
    { title: "Titulo 3", text: "No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos.", image: "https://www.imprentaonline.net/blog/wp-content/webpc-passthru.php?src=https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png&nocache=1" },
    { title: "Titulo 4", text: "Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum.", image: "https://images.unsplash.com/photo-1546969430-d023da44cfec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D" },
  ]

  return (
    <div className="row container px-0 mx-0">
      {cardsInfo.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} image={card.image} />
      ))}
    </div>
  );
};

export default Cards