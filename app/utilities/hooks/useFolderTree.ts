import { useRedux } from './useRedux';
import { useEffect, useState } from 'react';
import { expandLink } from '@/app/redux/app/appSlice';

export const useFolderTree = () => {
  const [dispatch, app] = useRedux();
  const { links } = app;
  type Folder = {
    id: string;
    folders: Folder[];
  };
  const findFolders = (id: string): Folder[] => {
    const folders = links.filter(
      (link) => link.folderLocation === id && link.windowType === 'folder'
    );
    const tree = folders.map((folder) => {
      return {
        id: folder.linkID,
        folders: findFolders(folder.linkID),
      };
    });
    return tree;
  };
  const [tree, setTree] = useState<Folder[]>(findFolders('desktop'));
  const [selectedFolder, setSelectedFolder] = useState<string>('desktop');
  useEffect(() => {
    setTree(
      findFolders('desktop').map((folder) => {
        const mutateFolder = (subfolder: Folder): Folder => {
          return {
            ...subfolder,
            folders: subfolder.folders.map(mutateFolder),
          };
        };
        return {
          ...folder,
          folders: folder.folders.map(mutateFolder),
        };
      })
    );
  }, [links]);

  const selectFolder = (id: string) => {
    if (id === 'desktop') {
      setSelectedFolder('desktop');
    }
    const select = (tree: Folder[]) => {
      tree.forEach((folder) => {
        if (folder.id === id) {
          setSelectedFolder(id);
        }
        select(folder.folders);
      });

      return tree;
    };
    setTree(select(tree));
  };

  const expandFolder = (id: string) => {
    dispatch(expandLink({ linkID: id }));
  };

  return { tree, selectFolder, expandFolder, selectedFolder };
};
