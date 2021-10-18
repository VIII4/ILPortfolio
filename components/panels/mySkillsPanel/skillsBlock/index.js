import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./skillsBlock.module.css";

export default function SkillsBlock({
  title,
  dark,
  icon,
  subHeader,
  skillsHeader,
  skillsList,
  toolsList,
  langList,
}) {
  return (
    <MDBContainer className={`${styles.panelWrapper}`}>
      {/* ICON */}
      <MDBRow center>
        <MDBCol size="3" md="1" className={styles.iconWrapper}>
          {icon}
        </MDBCol>
      </MDBRow>
      {/* Header */}
      <MDBRow center className={`${styles.skillsHeader} `}>
        <MDBCol className="text-center ">
          <MDBTypography
            tag="h3"
            colorText={dark ? "dark" : "light"}
            className=" "
          >
            {title}
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      {/* SUB Text */}
      <MDBRow center className="">
        <MDBCol className="text-center ">
          <MDBTypography tag="h5" colorText={dark ? "dark" : "light"}>
            {subHeader}
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center className="my-2 ">
        <MDBCol
          size="12"
          md="8"
          lg="4"
          xl="7"
          className={`${styles.skillsCard} ${
            dark ? styles.skillsCardDark : styles.skillsCardLight
          }`}
        >
          <MDBTypography tag="strong" variant="h5">
            {skillsHeader ? `${skillsHeader}:` : "What I design:"}
          </MDBTypography>
          <MDBTypography listInLine className="mt-1">
            {/* Map Skills list */}
            {skillsList.map((skill) => {
              return (
                <li key="{skill}" className="list-inline-item">
                  {skill}
                </li>
              );
            })}
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow center className={styles.toolsPanel}>
        <MDBCol
          size="12"
          md="8"
          lg="4"
          xl="7"
          className={`${styles.skillsCard} ${
            dark ? styles.skillsCardDark : styles.skillsCardLight
          }`}
        >
          <MDBTypography tag="strong" variant="h5">
            The tools I use:
          </MDBTypography>
          <ul className={styles.skillsList}>
            {/* Map Tools list */}
            {toolsList.map((tool) => {
              return (
                <li key="{tool}" color="light">
                  {tool}
                </li>
              );
            })}
          </ul>

          {langList && (
            <>
              <MDBTypography tag="strong" variant="h5">
                Languages:
              </MDBTypography>
              <MDBTypography listInLine className="">
                {langList.map((lang) => {
                  return (
                    <li key="{lang}" className="list-inline-item">
                      {lang}
                    </li>
                  );
                })}
              </MDBTypography>
            </>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
