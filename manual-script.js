function initFolder(folder) {
  let folderContent = folder.children['content'];
  folderContent.style.setProperty('--height', folderContent.clientHeight + 'px');
  folderContent.classList.add('folder-content-close-animation');

  let folderArrow = folder.children['top-section'].children['arrow'];
  folderArrow.classList.add('folder-arrow-close-animation');
}

function onFolderClick(event) { // this == folder clicked
  let folderTopSection = this.children['top-section'];
  if(event.path.includes(folderTopSection)) {
    let folderArrow = folderTopSection.children['arrow'];
    let folderArrowAnimationClass = folderArrow.classList[1];
    switch(folderArrowAnimationClass) {
      case animations.folderArrowAnimations[0]:
        folderArrow.classList.replace(animations.folderArrowAnimations[0], animations.folderArrowAnimations[1]);
        break;
      case animations.folderArrowAnimations[1]:
        folderArrow.classList.replace(animations.folderArrowAnimations[1], animations.folderArrowAnimations[0]);
        break;
    }

    let folderContent = this.children['content'];
    let folderContentAnimationClass = folderContent.classList[1];
    switch(folderContentAnimationClass) {
      case animations.folderContentAnimations[0]:
        folderContent.classList.replace(animations.folderContentAnimations[0], animations.folderContentAnimations[1]);
        break;
      case animations.folderContentAnimations[1]:
        folderContent.classList.replace(animations.folderContentAnimations[1], animations.folderContentAnimations[0]);
        break;
    }
  }
}



let folders = [...document.body.children].filter(elmt => [...elmt.classList].includes('folder'));
const animations = {
  folderArrowAnimations: ['folder-arrow-open-animation', 'folder-arrow-close-animation'],
  folderContentAnimations: ['folder-content-open-animation', 'folder-content-close-animation']
};

for(let folder of folders) {
  initFolder(folder);
  folder.addEventListener('click', onFolderClick);
  folder.addEventListener('touchend', onFolderClick);
}
