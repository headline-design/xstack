import { DiscordIcon, GitHubIcon } from "nextra/icons";

function Github() {
  return (
    <a
      href="https://github.com/headline-design"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="HEADLINE DESIGN GitHub"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.gg/bQuh8QSx6V"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="XStack Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

export { Github, Discord };
