import React from "react";

//import { ContactForm } from "..";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
//import styles from "./contactModal.module.css";

export default function CustomModal({
  showModal,
  closeModal,
  getOpenState,
  children,
}) {
  return (
    <>
      <MDBModal
        show={showModal}
        getOpenState={getOpenState}
        animationDirection="left"
      >
        <MDBModalDialog centered className="modal-side modal-bottom-right">
          <MDBModalContent>
            <MDBModalBody>{children}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn outline color="dark" onClick={closeModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}