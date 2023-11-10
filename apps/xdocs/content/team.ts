const XSTACK_TEAM: Record<string, AuthorDetails> = {
  aaronmartinez: {
    name: "Aaron Martinez",
    twitterUsername: "ussaaron_",
    picture: "/images/people/aaronmartinez.png",
  }
};

export type Author = keyof typeof XSTACK_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default XSTACK_TEAM;
