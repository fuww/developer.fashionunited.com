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
     ];

  scripts.hello.exec = "echo hello from $GREET";

  enterShell = ''
    hello
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
