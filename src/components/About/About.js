import React from "react";
import "./About.css";
import factory from "../../media/factory.jpeg";

export const About = () => {
  return (
    <div className="about--container">
      <div className="about--name">
        <h1>Founder: </h1>
        <h1>Enzo Ferrari</h1>
      </div>
      <p>Since 1947</p>
      <p>Headquarters: Maranello, Italy</p>
      <p>
        Ferrari is an Italian automotive manufacturer in the Formula One World
        Championship, also involved in high-end and high-performance racing
        cars, supercars, and luxury sports cars. The company was founded by Enzo
        Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio
        Costruzioni, the company built its first car in 1940. However, the
        company's inception as an auto manufacturer is usually recognized in
        1947, when the first Ferrari-badged car was completed.
      </p>
      <p>
        In 2014 Ferrari was rated the world's most powerful brand by Brand
        Finance. In June 2018, the 1964 250 GTO became the most expensive car in
        history, setting an all-time record selling price of $70 million.
      </p>
      <p>
        Our story officially begins in 1947 when the first car built under the
        Ferrari marque, the 125 S, drove through the historic factory gates on
        Via Abetone Inferiore in Maranello. That said, Ferrari’s origins are
        inextricably linked to its founder’s entire life story.
      </p>
      <p>
        Born in Modena on February 18 1898, Enzo Ferrari passed away on August
        14 1988, having devoted his entire life to motor racing. He became an
        Alfa Romeo works driver in 1924 but just five years later set up the
        Scuderia Ferrari at Viale Trieste in Modena to allow its mostly
        gentleman driver members compete.
      </p>
      <p>
        In 1938, Ferrari was appointed head of Alfa Corse. However, he left in
        1939 to start up Auto Avio Costruzioni in the Scuderia’s old
        headquarters.
      </p>
      <p>
        His new company founded, Enzo Ferrari built a sports car, a spider
        powered by a 1500 cc 8-cylinder engine. He called it the 815 and two
        were built. The car also took part in the 1940 Mille Miglia.
        Unfortunately, the outbreak of World War Two brought all motor racing to
        an abrupt end.
      </p>
      <p>
        In late 1943, Ferrari moved Auto Avio Costruzioni’s workshops from
        Modena to Maranello. At the end of the War, he set about designing and
        building what was to become the first Ferrari, the 125 S, a 1500cc
        12-cylinder. Franco Cortese drove the car in its maiden race at the
        Piacenza Circuit on May 11 1947 and again to its first victory in the
        Rome Grand Prix at the Terme di Caracalla circuit on the 25th of the
        same month.
      </p>
      <div className="ferrari--factory">
        <p>Factory: </p>
        <img src={factory} alt="ferrari factory" />
      </div>
    </div>
  );
};
