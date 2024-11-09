import { useRedux } from './useRedux';

export const useSelectedLink = (folderLocationID: string) => {
  const [_dispatch, app] = useRedux();
  const links = app.links;
  const selectedLink = links.find(
    (link) => link.folderLocation === folderLocationID && link.selected
  );
  return [selectedLink] as const;
};
