import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./aboutMePanel.module.css";

export function AboutMePanel() {
  //
  return (
    <>
      <MDBContainer fluid className="p-4 mt-2">
        {/* White BG  */}
        <MDBRow className={`${styles.aboutMeBackground} mt-3 p-3`}>
          <MDBCol /* TO DO: STYLE To make element shift aboove background */
            className={styles.aboutMeWrapper}
          >
            <MDBRow className="rounded bg-dark text-center p-2">
              <MDBTypography tag="h6" className="text-muted m-0">
                Hello, My name is Iyan. I’m a Developer, Designer and an
                Entrepreneur.
              </MDBTypography>
            </MDBRow>
            <MDBRow center className={styles.imgWrapper}>
              <img
                src="/images/biopic/portrait.png"
                className={styles.imgPortrait}
              />
            </MDBRow>
            <MDBRow className="text-center p-2">
              <MDBTypography tag="h6" className="text-dark m-0">
                I love to create, code and learn, what better way to do all
                three than to be a full stack developer. When I’m not behind the
                blue lights, I’m cycling with my wife or gaming with my son.
                Currently I am creating web based VR experiences with the
                company I founded, ixport Technologies, but always looking for
                opportunities to grow and/or to collaborate. Please don't
                hesitate to reach out.
              </MDBTypography>
            </MDBRow>
            <MDBRow className="bg-success"></MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
