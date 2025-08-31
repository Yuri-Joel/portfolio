"use client";

import { useEffect, useRef, useState } from "react";
import "../Carrossel.css";

interface CarrosselProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  radius?: number;
}

export default function Carrossel({
  items,
  autoplay = true,
  autoplaySpeed = 3000,
  radius = 450,
}: CarrosselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [theta, setTheta] = useState(0);
  const angle = 360 / items.length;
  const currentIndexRef = useRef(0);

  // Posiciona os cards ao montar
  useEffect(() => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll<HTMLDivElement>(".card");

    cards.forEach((card, i) => {
      const cardAngle = angle * i;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
    });
  }, [items.length, radius]);

  // Atualiza rotação
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${theta}deg)`;
    }
  }, [theta]);

  const nextCard = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
    setTheta((prev) => prev - angle);
  };

  const prevCard = () => {
    currentIndexRef.current =
      (currentIndexRef.current - 1 + items.length) % items.length;
    setTheta((prev) => prev + angle);
  };


  // Autoplay

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextCard();
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed]);
  // Drag
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let isDragging = false;

    const dragStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = "touches" in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const currentX =
        "touches" in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
      const diffX = currentX - startX;
      const sensitivity = 0.5;

      setTheta((prev) => prev + diffX * sensitivity);
      startX = currentX;
    };

    const dragEnd = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      isDragging = false;
      const currentX =
        "changedTouches" in e
          ? e.changedTouches[0].pageX
          : (e as MouseEvent).pageX;
      const diffX = currentX - startX;

      if (Math.abs(diffX) > 20) {
        if (diffX > 0) prevCard();
        else nextCard();
      }
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    window.addEventListener("mousemove", drag);
    window.addEventListener("touchmove", drag);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, []);

  return (
    <div className="body-carrosel">
      <div className="carousel-wrapper">
      <div className="carousel" ref={carouselRef}>
        {items.map((item, i) => (
          <div key={i} className="card">
            {item}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prevCard}>◀️</button>
        <button onClick={nextCard}>▶️</button>
      </div>
    </div>

      </div>
      );
}
