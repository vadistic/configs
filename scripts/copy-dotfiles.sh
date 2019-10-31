copy_dotfiles () {
  # will break with some filenames
  dotfiles=(`find fixtures/fixture-dotfiles -type f`)

  while read dir;
  do
    for dotfile in "${dotfiles[@]}"
    do
      cp $dotfile $dir
    done
  done
}

find fixtures -mindepth 1 -maxdepth 1 -type d -not -name fixture-dotfiles | copy_dotfiles
