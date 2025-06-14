import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, useDisclosure } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const list = [
    {
      title: "Project 1",
      img: "github.png",
      repo: "https://github.com/jannakam/Java_MiniBank",
      description: "Description for Project 1",
    },
    {
      title: "Project 2",
      img: "github.png",
      repo: "https://github.com/jannakam/Java_MiniBank",
      description: "Description for Project 2",
    },
    {
      title: "Project 3",
      img: "github.png",
      repo: "https://github.com/jannakam/Java_MiniBank",
      description: "Description for Project 3",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h1>
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => openModal(item)}
            className="bg-white dark:bg-gray-800"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[250px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between text-gray-800 dark:text-white">
              <b>{item.title}</b>
              <Link
                href={item.repo}
                isExternal
                showAnchorIcon
                className="text-[#B76D68]"
              >
                GitHub Repository
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          project={selectedProject}
        />
      )}
    </div>
  );
}
