export interface GridItem {
  icon: string;
  text: string;
}

export interface GridColumn {
  title: string;
  items: GridItem[];
}

export const gridData: GridColumn[] = [
  {
    title: "Frontend",
    items: [
      { icon: "/src/assets/icons/react.svg", text: "React" },
      { icon: "/src/assets/icons/nextjs.svg", text: "Next.js" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "/src/assets/icons/nodejs.svg", text: "Node.js" },
      { icon: "/src/assets/icons/nestjs.svg", text: "Nest.js" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: "/src/assets/icons/postgresql.svg", text: "Postgresql" },
      { icon: "/src/assets/icons/mongodb.svg", text: "Mongodb" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { icon: "/src/assets/icons/aws.svg", text: "AWS" },
      { icon: "/src/assets/icons/docker.svg", text: "Docker" },
    ],
  },
];
