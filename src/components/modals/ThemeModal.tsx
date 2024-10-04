"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface PropTypes {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ThemeModal: FC<PropTypes> = ({ isOpen, onOpenChange }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.documentElement.classList.remove(
      "dark",
      "purple",
      "light",
      "orange"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = (value: string) => {
    setTheme(value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-white">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-600">
                Theme
              </ModalHeader>
              <ModalBody className="grid grid-cols-2 gap-5">
                <div
                  className="border shadow cursor-pointer p-5 rounded-lg text-black"
                  onClick={() => toggleTheme("light")}
                >
                  Light
                </div>
                <div
                  className="border shadow cursor-pointer p-5 rounded-lg text-black"
                  onClick={() => toggleTheme("dark")}
                >
                  Dark
                </div>
                <div
                  className="border shadow cursor-pointer p-5 rounded-lg text-black"
                  onClick={() => toggleTheme("purple")}
                >
                  Purple
                </div>
                <div
                  className="border shadow cursor-pointer p-5 rounded-lg text-black"
                  onClick={() => toggleTheme("orange")}
                >
                  Orange
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  className="text-white bg-primary"
                  onPress={onClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeModal;
