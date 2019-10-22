find fixtures -mindepth 1 -maxdepth 1 -type d -not -name fixture-dotfiles | \
  xargs -I _ cp fixtures/fixture-dotfiles/.* _
