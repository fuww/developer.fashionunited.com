{ pkgs, ... }:

{
  env.GREET = "devenv";

  packages = [
    pkgs.git
    pkgs.which
    pkgs.htop
    pkgs.nixpkgs-fmt
    pkgs.zlib
    pkgs.nodejs_20
    pkgs.corepack_20
    pkgs.playwright-driver.browsers
  ];

  env.PLAYWRIGHT_BROWSERS_PATH = pkgs.playwright-driver.browsers;
  env.PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = true;

  scripts.hello.exec = "echo hello from $GREET";

  enterShell = ''
    echo PLAYWRIGHT_BROWSERS_PATH is $PLAYWRIGHT_BROWSERS_PATH
    echo PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS is $PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS
    git --version
  '';

  dotenv.enable = true;

  languages.nix.enable = true;
  languages.javascript.enable = true;
  languages.typescript.enable = true;

  pre-commit.hooks = {
    nixpkgs-fmt.enable = true;
  };
}
