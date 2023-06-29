interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  bgInfo: string;
  email: string;
  heroImage: Image & { [key: string]: string };
  name: string;
  phoneNumber: string;
  profilePic: Image & { [key: string]: string };
}

export interface TechStack extends SanityBody {
  _type: "techStack";
  title: string;
  image: Image & { [key: string]: string };
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image & { [key: string]: string };
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image & { [key: string]: string };
  // summary: string;
  // techStack: TechStack[];
  linkToBuild: string;
}

export interface Design extends SanityBody {
  _type: "design";
  title: string;
  image: Image & { [key: string]: string };
  // summary: string;
  // techStack: TechStack[];
  linkToBuild: string;
}
