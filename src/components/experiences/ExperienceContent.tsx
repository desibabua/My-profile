import React, { useState } from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    project: "Mosip",
    role: "Senior Software Engineer",
    startDate: "2022 Sep",
    endDate: "Present",
    details: [
      "Developed a web application to collect employee feedback and reviews to calibrate ratings and hikes",
      "Rewrote Node.js backend using Ruby on Rails and migrated from MongoDB to PostgresDB for a cleaner and more stable product",
      "Worked on existing Express JS backend to add new features in parallel to new ROR backend",
      "Contributed to all aspects of the product including creating user stories, building React UI, developing backend features, and running applications in Kubernetes",
      "Traveled to Indonesia to discuss new requirements and provided user support for queries",
      "Improved the Testing coverage from 40% to 90%+ for existing and new backend and frontend repositories",
    ],
  },
  {
    id: 2,
    project: "Goldman Sachs - Analytics",
    role: "Software Engineer",
    startDate: "2021 Jan",
    endDate: "2022 May",
    details: [
      "Worked on existing Express JS backend to add new features in parallel to new ROR backend",
      "Contributed to all aspects of the product including creating user stories, building React UI, developing backend features, and running applications in Kubernetes",
      "Traveled to Indonesia to discuss new requirements and provided user support for queries",
      "Improved the Testing coverage from 40% to 90%+ for existing and new backend and frontend repositories",
    ],
  },
];

const ExperienceContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Flex mt="50px" minH="500px" maxW="1000px">
      <Box w="30%" pr="4">
        {projects.map((project) => (
          <Text
            key={project.id}
            cursor="pointer"
            className={selectedProject.id === project.id ? "selected" : ""}
            id="experienceNav"
            onClick={() => setSelectedProject(project)}
          >
            {project.project}
          </Text>
        ))}
      </Box>

      <Box w="70%">
        <Text fontSize="xl" fontWeight="bold">
          {selectedProject.project}
        </Text>
        <List>
          {selectedProject.details.map((detail) => (
            <ListItem>{detail}</ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
};

export default ExperienceContent;
