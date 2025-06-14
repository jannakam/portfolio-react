import React from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

export default function ProjectModal({ isOpen, onOpenChange, project }) {

  const closeHandler = () => {
    onOpenChange(false);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      isDismissable={false} 
      isKeyboardDismissDisabled={true}
      classNames={{
        base: "bg-white dark:bg-gray-800",
        header: "text-gray-800 dark:text-white",
        body: "text-gray-600 dark:text-gray-300",
        footer: "text-gray-800 dark:text-white"
      }}
    >
      <ModalContent className="h-1/2">
        <ModalHeader className="flex flex-col gap-1">
          {project.title}
        </ModalHeader>
        <ModalBody>
          <Image
            src={project.img}
            alt={project.title}
            className="object-cover h-[250px] w-full"
          />
          <h3>{project.description}</h3>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={closeHandler}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
