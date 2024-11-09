import { useRedux } from './useRedux';
import { useState } from 'react';

export const useFolderTree = () => {
  const [_dispatch, app] = useRedux();
  const { links } = app;
  type Folder = {
    name: string;
    id: string;
    selected: boolean;
    folders: Folder[];
  };
  const findFolders = (id: string): Folder[] => {
    const folders = links.filter(
      (link) => link.folderLocation === id && link.windowType === 'folder'
    );
    const tree = folders.map((folder) => {
      return {
        name: folder.name,
        id: folder.linkID,
        selected: false,
        folders: findFolders(folder.linkID),
      };
    });
    return tree;
  };
  const [tree, setTree] = useState<Folder[]>(findFolders('desktop'));
  const unSelectAll = () => {
    const unSelect = (tree: Folder[]) => {
      tree.forEach((folder) => {
        folder.selected = false;
        unSelect(folder.folders);
      });
    };
    unSelect(tree);
  };

  return { tree };
};
