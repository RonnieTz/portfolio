import { useRedux } from './useRedux';
import { useEffect, useState } from 'react';

export const useFolderTree = () => {
  const [_dispatch, app] = useRedux();
  const { links } = app;
  type Folder = {
    name: string;
    id: string;
    selected: boolean;
    folders: Folder[];
    expanded: boolean;
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
        expanded: false,
      };
    });
    return tree;
  };
  const [tree, setTree] = useState<Folder[]>(findFolders('desktop'));
  useEffect(() => {
    setTree(findFolders('desktop'));
  }, [links]);
  const [selectedFolder, setSelectedFolder] = useState<string>('desktop');

  const selectFolder = (id: string) => {
    const select = (tree: Folder[]) => {
      tree.forEach((folder) => {
        if (folder.id === id) {
          folder.selected = true;
          setSelectedFolder(id);
        } else {
          folder.selected = false;
        }
        select(folder.folders);
      });

      return tree;
    };
    setTree(select(tree));
  };

  const expandFolder = (id: string) => {
    const expand = (tree: Folder[]) => {
      tree.forEach((folder) => {
        if (folder.id === id) {
          folder.expanded = !folder.expanded;
        }
        expand(folder.folders);
      });

      return tree;
    };
    setTree(expand(tree));
  };

  return { tree, selectFolder, expandFolder, selectedFolder };
};
