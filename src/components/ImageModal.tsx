import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  image: string;
}

export function ImageModal({ onClose, isOpen, image }: ModalProps) {
  return (
    <>
      <Modal
        motionPreset="slideInBottom"
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent h={["sm", "700px"]}>
          <ModalCloseButton color="white" />
          <ModalBody p="0">
            <Image
              src={image}
              alt="image"
              w="full"
              h="full"
              objectFit="cover"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
